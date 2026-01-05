# @bookmarks/shared-types

Shared TypeScript types for Bookmarks Index extension and server.

## Installation

### From GitHub

```bash
# Using bun
bun add @bookmarks/shared-types@github:wavilikhin/bookmarks-shared-types

# Using npm
npm install @bookmarks/shared-types@github:wavilikhin/bookmarks-shared-types
```

### With specific version/tag

```bash
bun add @bookmarks/shared-types@github:wavilikhin/bookmarks-shared-types#v0.1.0
```

## Usage

### In Extension (tRPC Client)

```typescript
import type { AppRouter } from '@bookmarks/shared-types'
import { createTRPCClient } from '@trpc/client'

const api = createTRPCClient<AppRouter>({
// ... config
})

// Type-safe API calls
const spaces = await api.spaces.list.query()
```

### Entity Types

```typescript
import type { Space, Group, Bookmark } from '@bookmarks/shared-types'

function displaySpace(space: Space) {
console.log(space.name)
}
```

## Development

```bash
# Install dependencies
bun install

# Build
bun run build

# The dist/ folder will contain the compiled types
```

## Updating Types

When the server API changes:

1. Update `src/router.ts` with new types
2. Run `bun run build`
3. Commit and push
4. In consumer repos, run `bun update @bookmarks/shared-types`
