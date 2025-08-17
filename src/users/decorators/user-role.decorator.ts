import { SetMetadata } from '@nestjs/common';

type Role = 'admin' | 'user';

export function UserRole(role: Role) {
  return SetMetadata('roles', [role]);
}
