import { TokenId } from '@/enums/tokenId.enum';
import type { Token } from '@/interfaces/token.interface';
import { SwapVenue } from '@/enums/swapVenue.enum';

export function resolveSwapVenue(fromToken: Token, toToken: Token): SwapVenue {
  return fromToken.id === TokenId.Sol || toToken.id === TokenId.Sol
    ? SwapVenue.Jupiter
    : SwapVenue.Uniswap;
}
