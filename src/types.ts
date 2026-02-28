export interface Page {
  id: string;
  title: string;
  description?: string;
  content: React.ReactNode;
}

export interface NavCategory {
  id: string;
  label: string;
  pages: string[];
  isExpanded?: boolean;
}

export interface Hint {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  country?: string;
  image?: string;
  timestamp: string; // ISO string from created_at
}

export interface Region {
  id: string;
  label: string;
  pages: string[];
}

export interface Category {
  id: string;
  name: string;
}

export interface Country {
  id: string;
  name: string;
  regionId: string;
}
