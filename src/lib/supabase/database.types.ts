export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          created_at: string
          email: string
          full_name: string | null
          avatar_url: string | null
        }
        Insert: {
          id: string
          created_at?: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
        }
      }
      memories: {
        Row: {
          id: string
          created_at: string
          title: string
          content: string
          media_url: string | null
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          content: string
          media_url?: string | null
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          content?: string
          media_url?: string | null
          user_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}