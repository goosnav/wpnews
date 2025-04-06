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
      articles: {
        Row: {
          id: string
          title: string
          slug: string
          content: string
          excerpt: string | null
          featured_image: string | null
          category_id: string
          metadata: Json | null
          published_date: string
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          content: string
          excerpt?: string | null
          featured_image?: string | null
          category_id: string
          metadata?: Json | null
          published_date?: string
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          content?: string
          excerpt?: string | null
          featured_image?: string | null
          category_id?: string
          metadata?: Json | null
          published_date?: string
          created_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          created_at?: string
        }
      }
      subscribers: {
        Row: {
          id: string
          email: string
          preferences: Json | null
          confirmed: boolean
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          preferences?: Json | null
          confirmed?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          preferences?: Json | null
          confirmed?: boolean
          created_at?: string
        }
      }
      trending_topics: {
        Row: {
          id: string
          title: string
          score: number
          research_data: Json | null
          processed: boolean
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          score: number
          research_data?: Json | null
          processed?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          score?: number
          research_data?: Json | null
          processed?: boolean
          created_at?: string
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