type NotificationType = 'info' | 'success' | 'warning' | 'error';
declare class Notification {
    type: NotificationType;
    message: string;
    duration: number;
    constructor(type: NotificationType, message: string, duration?: number);
    show(): void;
}

export { Notification, type NotificationType };
