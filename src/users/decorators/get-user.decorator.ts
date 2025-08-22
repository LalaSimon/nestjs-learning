import { SetMetadata } from '@nestjs/common';

export function CurrentUser(id: string) {
  return SetMetadata('userId', id);
}
