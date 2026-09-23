import { BlobBackgroundProps } from "@/src/types";

export function BlobBackground({ variant = 'brand' }: BlobBackgroundProps) {
  if (variant === 'warm') {
    return (
      <>
        <div
          className="blob-drift absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-35 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #D4B8D8 0%, transparent 70%)' }}
        />
        <div
          className="blob-drift-b absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #EDE8FA 0%, transparent 70%)' }}
        />
      </>
    );
  }

  return (
    <>
      <div
        className="blob-drift absolute top-0 right-0 -mr-40 -mt-20 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, #7B68C5 0%, transparent 70%)' }}
      />
      <div
        className="blob-drift-b absolute bottom-0 left-0 -ml-40 mb-20 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none opacity-15"
        style={{ background: 'radial-gradient(circle, #A78BFA 0%, transparent 70%)' }}
      />
    </>
  );
}
