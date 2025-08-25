import { SetMetadata } from '@nestjs/common';

export function SetUserContext(id: string) {
  return SetMetadata('userId', id);
}
