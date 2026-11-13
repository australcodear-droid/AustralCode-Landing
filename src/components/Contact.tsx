import { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();
  const [state, setState] = useState<"idle" | "submitting" | "success">("idle");
  const fields = [
    ["name", "namePlaceholder"],
    ["email", "emailPlaceholder"],
    ["message", "messagePlaceholder"],
  ] as const;
  function submit(e: FormEvent) {
    e.preventDefault();
    setState("submitting");
    setTimeout(() => setState("success"), 700);
  }
  const title = t("contact.title", { returnObjects: true }) as string[];
  return (
    <section id="contact" className="section-wrap bg-paper">
      <div className="grid grid-cols-12 border-x border-ink">
        <div className="col-span-12 border-b border-ink p-5 md:col-span-5 md:border-b-0 md:border-r md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4 md:block">
            <p className="eyebrow">{t("contact.label")}</p>
            <h2 className="headline text-[clamp(2.4rem,11vw,7rem)] leading-[.86] tracking-[-.1em] md:mt-12 md:text-[clamp(2.6rem,5.6vw,6rem)] md:leading-[.82]">
              {title[0]}
              <br />
              {title[1] && <i>{title[1]}</i>}
            </h2>
          </div>
          <p className="stack-gap mt-6 text-sm leading-5 md:mt-12">{t("contact.intro")}</p>
          <a
            className="mt-3 block break-words text-base font-bold underline decoration-mint decoration-4 underline-offset-4 md:text-lg"
            href="mailto:hello@australcode.com"
          >
            hello@australcode.com
          </a>
        </div>
        <form
          onSubmit={submit}
          className="col-span-12 grid content-start gap-0 md:col-span-7"
        >
          {fields.map(([name, placeholder]) => (
            <label
              className="border-b border-ink p-5 text-[10px] font-bold tracking-widest md:p-7"
              key={name}
            >
              {t(`contact.fields.${name}`)}
              <input
                aria-label={t(`contact.fields.${name}`)}
                required
                className="mt-3 block w-full bg-transparent text-base font-normal outline-none placeholder:text-ink/40"
                placeholder={t(`contact.fields.${placeholder}`)}
              />
            </label>
          ))}
          <button
            className="m-5 flex w-[calc(100%-2.5rem)] justify-between border border-ink bg-navy px-5 py-4 text-sm font-bold text-mint transition-colors hover:bg-mint hover:text-navy disabled:opacity-60 md:m-7 md:w-[calc(100%-3.5rem)]"
            disabled={state === "submitting"}
          >
            {state === "success"
              ? t("contact.success")
              : state === "submitting"
                ? t("contact.sending")
                : `${t("contact.send")} →`}
          </button>
        </form>
      </div>
    </section>
  );
}
