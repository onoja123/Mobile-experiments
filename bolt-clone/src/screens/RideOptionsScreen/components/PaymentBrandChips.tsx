import { Text, View } from 'react-native';
import type { BrandChipProps } from '@/interfaces';
import { colors } from '@/theme';

const brand = colors.paymentBrand;

function BrandChip({ filled, children }: BrandChipProps) {
  return (
    <View
      className="h-5 min-w-[28px] flex-row items-center justify-center rounded-[4px] px-1"
      style={
        filled
          ? { backgroundColor: filled }
          : { backgroundColor: colors.white, borderWidth: 1, borderColor: colors.chipOutline }
      }
    >
      {children}
    </View>
  );
}

export default function PaymentBrandChips() {
  return (
    <View className="mt-5 flex-row flex-wrap items-center" style={{ gap: 5 }}>
      <BrandChip>
        <View className="rounded-[3px] px-1 py-0.5" style={{ backgroundColor: brand.ideal }}>
          <Text className="text-[6px] font-bold italic text-white">iDEAL</Text>
        </View>
      </BrandChip>
      <BrandChip>
        <View
          className="h-3 w-2.5"
          style={{ backgroundColor: brand.bancontactBlue, transform: [{ skewX: '-20deg' }] }}
        />
        <View
          className="-ml-0.5 h-3 w-2.5"
          style={{ backgroundColor: brand.bancontactYellow, transform: [{ skewX: '-20deg' }] }}
        />
      </BrandChip>
      <BrandChip>
        <Text className="text-[7px] font-bold italic" style={{ color: brand.paypalNavy }}>
          Pay
          <Text style={{ color: brand.paypalBlue }}>Pal</Text>
        </Text>
      </BrandChip>
      <BrandChip filled={brand.mastercardNavy}>
        <View
          className="h-[11px] w-[11px] rounded-full"
          style={{ backgroundColor: brand.mastercardRed }}
        />
        <View
          className="-ml-1 h-[11px] w-[11px] rounded-full opacity-90"
          style={{ backgroundColor: brand.mastercardOrange }}
        />
      </BrandChip>
      <BrandChip filled={brand.visaNavy}>
        <Text className="text-[8px] font-bold italic text-white">VISA</Text>
      </BrandChip>
      <BrandChip filled={brand.amexBlue}>
        <Text className="text-[7px] font-bold text-white" style={{ letterSpacing: 0.5 }}>
          AMEX
        </Text>
      </BrandChip>
      <BrandChip>
        <View className="h-3 w-3 rounded-full border-[3px]" style={{ borderColor: brand.dinersBlue }} />
      </BrandChip>
      <BrandChip>
        <Text className="text-[6px] font-bold italic" style={{ color: brand.mpesaGreen }}>
          M-PESA
        </Text>
      </BrandChip>
      <BrandChip>
        <View className="h-3 w-[5px] rounded-sm" style={{ backgroundColor: brand.jcbBlue }} />
        <View className="ml-px h-3 w-[5px] rounded-sm" style={{ backgroundColor: brand.jcbRed }} />
        <View className="ml-px h-3 w-[5px] rounded-sm" style={{ backgroundColor: brand.jcbGreen }} />
      </BrandChip>
    </View>
  );
}
