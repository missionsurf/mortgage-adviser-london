export default function RiskWarning({ btl = false }: { btl?: boolean }) {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
      <p className="font-semibold">Important:</p>
      <p>Your home may be repossessed if you do not keep up repayments on your mortgage.</p>
      {btl && (
        <p className="mt-1">Buy to let mortgages are not regulated by the Financial Conduct Authority.</p>
      )}
    </div>
  );
}
