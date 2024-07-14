import { Logo } from "../../components/Logo/Logo";
import SettingButton from "./setting-button";

export default function HeaderSimple() {
  return (
    <header className="flex h-16 w-full items-center justify-between px-6">
      <Logo className="h-20 w-20" />
      <SettingButton />
    </header>
  );
}
