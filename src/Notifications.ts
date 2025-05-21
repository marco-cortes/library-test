export type NotificationType = 'info' | 'success' | 'warning' | 'error';

export class Notification {
    constructor(
        public type: NotificationType,
        public message: string,
        public duration: number = 3000
    ) {}
    
    show() {
        console.log(`[${this.type.toUpperCase()}] ${this.message}`);
        setTimeout(() => {
        console.log(`[${this.type.toUpperCase()}] Notification closed`);
        }, this.duration);
    }
}