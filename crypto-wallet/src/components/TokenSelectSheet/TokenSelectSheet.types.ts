import type { TokenId } from '@/enums/tokenId.enum';
import type { Token } from '@/interfaces/token.interface';

export interface TokenSelectSheetProps {
  open: boolean;
  onClose: () => void;
  tokens: Token[];
  selectedId: TokenId;
  onSelect: (token: Token) => void;
  searchable?: boolean;
}
