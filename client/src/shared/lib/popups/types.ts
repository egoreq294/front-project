export type PopupProps = {
  title: string;
  className?: string;
  onClose?: () => void;
  description?: string;
  testId?: string;
};

export type Popup = PopupProps & {
  id: string;
};

export type PopupSchema = {
  popups: Popup[];
};
