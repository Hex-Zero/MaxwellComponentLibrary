import React from 'react';

type ClickEl = HTMLButtonElement | HTMLAnchorElement;
 type ClickEvt = React.MouseEvent<ClickEl>;

export function useConfirm(
  requireConfirm: boolean | undefined,
  confirmTimeout: number,
  onConfirm?: React.MouseEventHandler<ClickEl>,
) {
  const [confirming, setConfirming] = React.useState(false);
  React.useEffect(() => {
    if (!confirming) return;
    const id = setTimeout(() => setConfirming(false), confirmTimeout);
    return () => clearTimeout(id);
  }, [confirming, confirmTimeout]);
  const wrapClick = (handler?: React.MouseEventHandler<ClickEl>) => (e: ClickEvt) => {
    if (requireConfirm && !confirming) {
      e.preventDefault();
      setConfirming(true);
      return;
    }
    if (requireConfirm && confirming && onConfirm) onConfirm(e);
    if (handler && (!requireConfirm || confirming)) handler(e);
    if (confirming) setConfirming(false);
  };
  return { confirming, wrapClick } as const;
}
