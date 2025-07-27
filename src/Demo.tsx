import { t } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { useState } from "react";

export const Demo = () => {
  const { i18n } = useLingui();
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <button onClick={() => setCount(count + 1)}>inc</button>
      </div>
      <p>{t({ message: "Demo: without passing i18n" })}</p>
      <p>{t(i18n)`Demo: using t macro`}</p>
      <p>{t(i18n)`Demo: with variable ${count}`}</p>
    </div>
  );
};

export const Demo2 = () => {
  return (
    <div>
      <p>{t({ message: "Demo2: without passing i18n" })}</p>
    </div>
  );
};
