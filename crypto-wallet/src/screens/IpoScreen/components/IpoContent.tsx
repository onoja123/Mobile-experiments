import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { liftIn } from '@/theme';
import { AllocationEstimator } from './AllocationEstimator';
import { CompanyOverviewCard } from './CompanyOverviewCard';
import { CompanyTimeline } from './CompanyTimeline';
import { DemandMeter } from './DemandMeter';
import { FinancialMetricsGrid } from './FinancialMetricsGrid';
import type { IpoContentProps } from './IpoContent.types';
import { IpoDetailsList } from './IpoDetailsList';
import { IpoHeroCard } from './IpoHeroCard';
import { PriceRangeCard } from './PriceRangeCard';
import { RelatedIpoCarousel } from './RelatedIpoCarousel';
import { SectionLabel } from './SectionLabel';

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 20,
  },
});

export function IpoContent({
  ipo,
  related,
  countdown,
  paused,
  subscribed,
  demand,
  amount,
  onAmountChange,
  estimate,
  refreshing,
}: IpoContentProps) {
  return (
    <>
      <Animated.View entering={liftIn(0)} style={styles.section}>
        <IpoHeroCard
          ipo={ipo}
          countdown={countdown}
          paused={paused}
          subscribed={subscribed}
        />
      </Animated.View>

      <Animated.View entering={liftIn(90)} className="mt-3" style={styles.section}>
        <DemandMeter percent={demand} />
      </Animated.View>

      <View style={styles.section}>
        <SectionLabel label="Offering Details" />
        <IpoDetailsList details={ipo.details} baseDelay={180} />
      </View>

      <Animated.View entering={liftIn(320)} className="mt-3" style={styles.section}>
        <PriceRangeCard low={ipo.priceLow} high={ipo.priceHigh} />
      </Animated.View>

      <Animated.View entering={liftIn(400)} className="mt-3" style={styles.section}>
        <CompanyOverviewCard ipo={ipo} />
      </Animated.View>

      <View style={styles.section}>
        <SectionLabel label="Financials" />
        <FinancialMetricsGrid metrics={ipo.metrics} baseDelay={480} />
      </View>

      <View style={styles.section}>
        <SectionLabel label="Allocation Estimator" />
      </View>
      <Animated.View entering={liftIn(560)} style={styles.section}>
        <AllocationEstimator
          ipo={ipo}
          amount={amount}
          onAmountChange={onAmountChange}
          estimate={estimate}
          refreshing={refreshing}
        />
      </Animated.View>

      <SectionLabel label="Journey to IPO" inset />
      <CompanyTimeline events={ipo.timeline} baseDelay={640} />

      <SectionLabel label="Upcoming IPOs" inset />
      <RelatedIpoCarousel ipos={related} baseDelay={720} />
    </>
  );
}
