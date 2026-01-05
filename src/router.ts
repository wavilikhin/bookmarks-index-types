// AppRouter type definition
// This defines the contract between extension and server

// ============================================
// Entity Types (shared between client and server)
// ============================================

export interface Space {
  id: string;
  userId: string;
  name: string;
  icon?: string | null;
  color?: string | null;
  order: number;
  isArchived: boolean;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface Group {
  id: string;
  userId: string;
  spaceId: string;
  name: string;
  icon?: string | null;
  order: number;
  isArchived: boolean;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export interface Bookmark {
  id: string;
  userId: string;
  spaceId: string;
  groupId: string;
  title: string;
  url: string;
  faviconUrl?: string | null;
  description?: string | null;
  order: number;
  isPinned: boolean;
  isArchived: boolean;
  createdAt: string | Date;
  updatedAt: string | Date;
}

// ============================================
// Router Type Definition
// Mirrors the server router structure for tRPC client
// ============================================

export type AppRouter = {
  spaces: {
    list: {
      query: () => Promise<Space[]>;
    };
    create: {
      mutate: (input: {
        id: string;
        name: string;
        icon?: string | null;
        color?: string | null;
        order: number;
      }) => Promise<Space>;
    };
    update: {
      mutate: (input: {
        id: string;
        name?: string;
        icon?: string | null;
        color?: string | null;
        isArchived?: boolean;
      }) => Promise<Space>;
    };
    delete: {
      mutate: (input: { id: string }) => Promise<{ success: boolean }>;
    };
    reorder: {
      mutate: (input: {
        orderedIds: string[];
      }) => Promise<{ success: boolean }>;
    };
  };
  groups: {
    list: {
      query: () => Promise<Group[]>;
    };
    create: {
      mutate: (input: {
        id: string;
        spaceId: string;
        name: string;
        icon?: string | null;
        order: number;
      }) => Promise<Group>;
    };
    update: {
      mutate: (input: {
        id: string;
        name?: string;
        icon?: string | null;
        spaceId?: string;
        isArchived?: boolean;
      }) => Promise<Group>;
    };
    delete: {
      mutate: (input: { id: string }) => Promise<{ success: boolean }>;
    };
    reorder: {
      mutate: (input: {
        spaceId: string;
        orderedIds: string[];
      }) => Promise<{ success: boolean }>;
    };
  };
  bookmarks: {
    list: {
      query: () => Promise<Bookmark[]>;
    };
    create: {
      mutate: (input: {
        id: string;
        spaceId: string;
        groupId: string;
        title: string;
        url: string;
        description?: string | null;
        order: number;
      }) => Promise<Bookmark>;
    };
    update: {
      mutate: (input: {
        id: string;
        title?: string;
        url?: string;
        description?: string | null;
        faviconUrl?: string | null;
        groupId?: string;
        spaceId?: string;
        isPinned?: boolean;
        isArchived?: boolean;
      }) => Promise<Bookmark>;
    };
    delete: {
      mutate: (input: { id: string }) => Promise<{ success: boolean }>;
    };
    reorder: {
      mutate: (input: {
        groupId: string;
        orderedIds: string[];
      }) => Promise<{ success: boolean }>;
    };
    move: {
      mutate: (input: {
        id: string;
        groupId: string;
        spaceId: string;
      }) => Promise<Bookmark>;
    };
  };
  sync: {
    ensureUser: {
      mutate: (input: {
        email?: string;
        name?: string;
        avatarUrl?: string;
      }) => Promise<{ id: string }>;
    };
    status: {
      query: () => Promise<{ hasServerData: boolean }>;
    };
  };
};

// ============================================
// Helper Types
// Note: RouterInputs and RouterOutputs should be inferred from the actual router
// instance in consumer codebases using inferRouterInputs<AppRouter> and inferRouterOutputs<AppRouter>
// ============================================

