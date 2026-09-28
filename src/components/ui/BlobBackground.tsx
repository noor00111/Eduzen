import { BlobBackgroundProps } from "@/src/types";

export function BlobBackground({ variant = 'brand' }: BlobBackgroundProps) {
  if (variant === 'warm') {
    return (
      <>
        <div className="blob-drift absolute top-0 right-0 w-150 h-150 rounded-full opacity-35 blur-3xl pointer-events-none bg-[radial-gradient(circle,#D4B8D8_0%,transparent_70%)]"/>
        <div className="blob-drift-b absolute bottom-0 left-0 w-100 h-100 rounded-full opacity-25 blur-3xl pointer-events-none bg-[radial-gradient(circle,#EDE8FA_0%,transparent_70%)]"/>
      </>
    );
  }

  return (
    <>
      <div className="blob-drift absolute top-0 right-0 -mr-40 -mt-20 w-150 h-150 rounded-full blur-3xl pointer-events-none opacity-20 bg-[radial-gradient(circle,#7B68C5_0%,transparent_70%)]"/>
      <div className="blob-drift-b absolute bottom-0 left-0 -ml-40 mb-20 w-125 h-125 rounded-full blur-3xl pointer-events-none opacity-15 bg-[radial-gradient(circle,#A78BFA_0%,transparent_70%)]"/>
    </>
  );
}
