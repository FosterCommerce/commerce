# Release Notes for Craft Commerce 4

## Unreleased

### Added

### Changed
- Craft Commerce now requires Craft CMS 4.0.0-alpha.1 or newer.
- Ajax responses from `commerce/payment-sources/*` no longer include `paymentForm`. Use `paymentFormErrors` instead.
- `craft\commerce\elements\Products::getVariants()`, `getDefaultVariant()`, `getChepeastVariant()`, `getTotalStock()`, and `getHasUnlimitedStock()` now return data related to only enabled variant(s) by default.
- Renamed `craft\commerce\elements\Order::EVENT_AFTER_REMOVE_LINE_ITEM` string from `afterRemoveLineItemToOrder` -> `afterRemoveLineItemFromOrder.
- `craft\commerce\model\ProductType::$titleFormat` was renamed to `$variantTitleFormat`.
- `craft\commerce\services\Variants::getAllVariantsByProductId()` now accepts a third param `$includeDisabled`.
- `craft\commerce\services\LineItems::createLineItem()` no longer has an `$orderId` argument.
- `craft\commerce\services\LineItems::resolveLineItem()` expects an `$order` argument instead of `$orderId`.

### Changed (Previously Deprecated)
- The `cartUpdatedNotice` param is no longer accepted for `commerce/cart/*` requests. Use a hashed `successMessage` param instead.
- Renamed `craft\commerce\services\ShippingMethods\getAvailableShippingMethods()` to `getMatchingShippingMethods()` to better represent the method.
- Subscription plans are no longer accessible via old Control Panel URLs.
- Removed `craft\commerce\models\ProductType::lineItemFormat`.

### Deprecated
- Deprecated `craft\commerce\models\Address::getCountryText()`. Use `getCountryName()` instead.
- Deprecated `craft\commerce\models\Address::getStateText()`. Use `getStateName()` instead.
- Deprecated `craft\commerce\models\Address::getAbbreviationText()`. Use `getStateAbbreviation()` instead.
- Deprecated `craft\commerce\models\ShippingAddressZone::getStatesNames()`. Use `getStatesLabels()` instead.
- Deprecated `craft\commerce\services\Customers::getAddressIds()`. Use `getAddressIdsByCustomerId()` instead.
- Deprecated `craft\commerce\services\Customers::deleteCustomer()`. Use `deletedCustomerbyId()` instead.
- Deprecated `craft\commerce\services\Plans::getAllGatewayPlans()`. Use `getPlansByGatewayId()` instead.
- Deprecated `craft\commerce\services\Subscriptions::getSubscriptionCountForPlanById()`. Use `getSubscriptionCountByPlanId()` instead.
- Deprecated `craft\commerce\services\Subscriptions::doesUserHaveAnySubscriptions()`. Use `doesUserHaveSubscriptions()` instead.
- Deprecated `craft\commerce\services\TaxRates::getTaxRatesForZone()`. Use `getTaxRatesByTaxZoneId()` instead.
- Deprecated `craft\commerce\services\Transactions::deleteTransaction()`. Use `deleteTransactionById()` instead.

### Removed (Changed in 4.0, not previously deprecated)
- Removed `craft\commerce\controllers\PlansController::actionRedirect()`.

### Removed (Previously Deprecated)
- Removed `Plugin::getInstance()->getPdf()`. Use `Plugin::getInstance()->getPdfs()` instead.
- Removed `commerce/orders/purchasable-search` action. Use `commerce/orders/purchasables-table` instead.
- Removed `craft\commerce\base\OrderDeprecatedTrait`.
- Removed `craft\commerce\Plugin::t()`. Use `Craft::t('commerce', 'My String')` instead.
- Removed `craft\commerce\elements\Order::getAdjustmentsTotalByType()` has been deprecated. Use `Order::getTotalTax()`, `Order::getTotalDiscount()`, or `Order::getTotalShippingCost()` instead.
- Removed `craft\commerce\elements\Order::getAvailableShippingMethods()` has been deprecated. Use `Order::getAvailableShippingMethodOptions()` instead.
- Removed `craft\commerce\elements\Order::getOrderLocale()` has been deprecated. Use `Order::orderLanguage` instead.
- Removed `craft\commerce\elements\Order::getShippingMethodId()` has been removed. Use `Order::getShippingMethodHandle()` instead.
- Removed `craft\commerce\elements\Order::getShouldRecalculateAdjustments()` has been deprecated. Use `Order::recalculationMode` instead.
- Removed `craft\commerce\elements\Order::getTotalTaxablePrice()`. Taxable price is now calculated within the tax adjuster.
- Removed `craft\commerce\elements\Order::setShouldRecalculateAdjustments()` has been deprecated. Use `Order::recalculationMode` instead.
- Removed `craft\commerce\elements\traits\OrderDeprecatedTrait`.
- Removed `craft\commerce\elements\actions\DeleteOrder`. Using standard `craft\elements\actions\Delete` instead.
- Removed `craft\commerce\elements\actions\DeleteProduct`. Using standard `craft\elements\actions\Delete` instead.
- Removed `craft\commerce\events\LineItemEvent::isValid`.
- Removed `craft\commerce\models\Email::getPdfTemplatePath()`. Use `craft\commerce\models\Email::getPdf()->getTemplatePath()` instead.
- Removed `craft\commerce\queue\jobs\ConsolidateGuestOrders::consolidate()`.
- Removed `craft\commerce\services\Customers::getCustomerId()`. Use `Customers::getCustomer()->id` instead.
- Removed `craft\commerce\services\Customers::saveUserHandler()`. Use `Customers::afterSaveUserHandler()` instead.
- Removed `craft\commerce\services\Discounts::EVENT_BEFORE_MATCH_LINE_ITEM`. Use `Discounts::EVENT_DISCOUNT_MATCHES_LINE_ITEM` instead.
- Removed `craft\commerce\services\Discounts::populateDiscountRelations()`.
- Removed `craft\commerce\services\Orders::cartArray()`. Use `$order->toArray()` instead.
- Removed `craft\commerce\services\Payments::getTotalAuthorizedForOrder()`.
- Removed `craft\commerce\services\Payments::getTotalAuthorizedOnlyForOrder()`. Use `Order::getTotalAuthorized()` instead.
- Removed `craft\commerce\services\Payments::getTotalPaidForOrder()`. Use `Order::getTotalPaid()` instead.
- Removed `craft\commerce\services\Payments::getTotalRefundedForOrder()`.
- Removed `craft\commerce\services\Sales::populateSaleRelations()`.
- Removed `craft\commmerce\models\LineItem::getAdjustmentsTotalByType()` has been deprecated. Use `LineItem::getTax()`, `LineItem::getDiscount()`, or `LineItem::getShippingCost()` instead.
- Removed `craft\commmerce\models\LineItem::setSaleAmount()`. Sale amount was read only since 3.1.1.
- Removed `json_encode_filtered` twig filter.
- Removed `availableShippingMethods` from `commerce/cart/*` action JSON responses. Use `availableShippingMethodOptions` instead.

### Fixed

### Security