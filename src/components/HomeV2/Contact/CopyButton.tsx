import { IconCheck, IconCopy } from "@tabler/icons-react";
import { config } from "../../../../config";
import { useState } from "react";
import Button from "@/components/ui/Button";

const CopyButton = () => {
  const { email } = config;

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const Icon = isCopied ? IconCheck : IconCopy;

  return (
    <Button
      onClick={handleCopyEmail}
      className="text-[24px] sm:text-[30px] flex justify-center px-4 sm:px-6 py-2 sm:py-3 items-center gap-2"
    >
      <span>{email}</span>
      <Icon className="sm:size-[40px] size-[30px]" stroke={1} />
    </Button>
  );
};

export default CopyButton;
