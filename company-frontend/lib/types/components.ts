export interface CardData {
    id: number;
    title: string;
    description: string;
    className: string,
    buttonText: string;
    type: 'consultation' | 'application';
  }
  
  export interface CardProps extends CardData {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  }
  
  export interface BookingPopupProps {
    visible: boolean;
    type?: 'consultation' | 'application';
    cardId?: number;
    onClose: () => void;
  }
  
  export interface ApplicationContentProps {
    onClose: () => void;
    type: 'provider' | 'pilot';
  }