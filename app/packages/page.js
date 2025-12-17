import PackagesShowcase from "@/components/packages/PackagesShowcase";
import PageTitle from "@/components/PageTitle";

export default function PackagesPage() {
  return (
    <div className="relative min-h-screen">
      <PageTitle />
      {/* Header */}
      <div className="text-center mt-12">
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-4">
          Whether you&apos;re refreshing a rental, upgrading your first home, or
          going all-in on a dream renovation, we&apos;ve designed three clear
          packages for Kitchens, Bathrooms, and Decks.
        </p>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Each tier includes example pricing, standard inclusions, and
          inspiration photos — so you can match your budget to the results you
          want.
        </p>
      </div>
      <PackagesShowcase />
    </div>
  );
}
