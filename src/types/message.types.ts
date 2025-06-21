export interface Message {
  id: number;
  sender_id: number;
  receiver_id: number;
  message: string;
  created_at: string;
  sender_username: string;
  receiver_username: string;
}

export interface MessageResponse {
  success: boolean;
  count: number;
  data: Message[];
}

export interface SendMessageResponse {
  message: string;
  data: Message;
}
