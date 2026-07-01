"use client";

import { useState } from "react";
import { Menu, X, Check, Sun, Moon } from "lucide-react";
import { useT } from "@/lib/i18n-context";
import { useTheme } from "@/lib/theme-provider";
import type { Lang } from "@/lib/i18n";

const FEATURES_EN = [
  { title: "Real-time Sync", desc: "Data syncs across every device in under 50ms. No manual refreshes, no stale data." },
  { title: "Team Workspaces", desc: "Organize projects into shared workspaces with granular permissions and audit logs." },
  { title: "API-first Design", desc: "Every feature is backed by a RESTful API. Integrate with your existing tools in minutes." },
  { title: "Advanced Analytics", desc: "Built-in dashboards with custom metrics, funnels, and cohort analysis." },
  { title: "Role-based Access", desc: "Define custom roles and permissions. Control exactly what each team member can see and do." },
  { title: "24/7 Support", desc: "Our engineering team is available around the clock. Average first response time: 3 minutes." },
];

const FEATURES_ZH = [
  { title: "实时同步", desc: "数据在 50ms 内跨设备同步。无需手动刷新，没有陈旧数据。" },
  { title: "团队工作区", desc: "将项目组织到共享工作区中，支持细粒度权限和审计日志。" },
  { title: "API 优先设计", desc: "每个功能都由 RESTful API 支持。分钟级集成到现有工具。" },
  { title: "高级分析", desc: "内置仪表板，支持自定义指标、漏斗和群组分析。" },
  { title: "基于角色的访问", desc: "自定义角色和权限。精确控制每个团队成员能查看和操作的内容。" },
  { title: "全天候支持", desc: "工程团队 24/7 在线。平均首次响应时间：3 分钟。" },
];

const PRICING = [
  { key: "plan.starter", desc_key: "plan.starter_desc", price: "$29", features: ["Up to 5 seats", "10GB storage", "Basic analytics", "Email support"] },
  { key: "plan.pro", desc_key: "plan.pro_desc", price: "$99", features: ["Up to 25 seats", "100GB storage", "Advanced analytics", "Priority support", "API access"], popular: true },
  { key: "plan.enterprise", desc_key: "plan.enterprise_desc", price: "$299", features: ["Unlimited seats", "1TB storage", "Custom analytics", "Dedicated support", "API access", "SSO & Audit logs"] },
];

const TRUST_LOGOS = ["Linear", "Vercel", "Stripe", "Figma", "Notion", "Supabase"];

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, lang, setLang } = useT();
  const { theme, setTheme } = useTheme();
  const features = lang === "zh" ? FEATURES_ZH : FEATURES_EN;

  return (
    <>
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b" style={{ borderColor: "var(--color-border)", background: "var(--color-bg)" }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md" style={{ background: "var(--color-purple)" }}>
              <span className="text-sm font-bold text-white">W</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">Warp</span>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            {["nav.features", "nav.pricing", "nav.docs", "nav.about"].map((k) => (
              <a key={k} href="#" className="text-sm font-medium transition-colors" style={{ color: "var(--color-muted)" }}>{t(k as any)}</a>
            ))}
            <button className="rounded px-5 py-2 text-sm font-medium text-white transition-colors" style={{ background: "var(--color-purple)" }}>{t("nav.cta")}</button>

            {/* Theme toggle */}
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded" style={{ color: "var(--color-muted)" }}>
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Lang toggle */}
            <div className="flex rounded-md border overflow-hidden text-xs" style={{ borderColor: "var(--color-border)" }}>
              {(["en", "zh"] as Lang[]).map((l) => (
                <button key={l} onClick={() => setLang(l)} className="px-2.5 py-1.5 font-medium transition-colors"
                  style={lang === l ? { background: "var(--color-purple)", color: "#fff" } : { color: "var(--color-muted)" }}>
                  {l === "en" ? "EN" : "中"}
                </button>
              ))}
            </div>
          </nav>
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} style={{ color: "var(--color-text)" }}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t px-6 py-4 md:hidden" style={{ borderColor: "var(--color-border)" }}>
            <div className="flex flex-col gap-3">
              {["nav.features", "nav.pricing", "nav.docs", "nav.about"].map((k) => (
                <a key={k} href="#" className="text-sm" style={{ color: "var(--color-muted)" }}>{t(k as any)}</a>
              ))}
              <button className="rounded px-5 py-2 text-sm font-medium text-white" style={{ background: "var(--color-purple)" }}>{t("nav.cta")}</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-16 text-center md:pt-32 md:pb-24">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium"
          style={{ borderColor: "var(--color-border)", background: "var(--color-surface)", color: "var(--color-muted)" }}>
          <span className="flex h-2 w-2 rounded-full" style={{ background: "var(--color-purple)" }} />
          {t("badge")}
        </div>
        <h1 className="mt-8 text-4xl font-light leading-[1.15] tracking-tight whitespace-pre-line md:text-6xl md:leading-[1.03] md:tracking-[-0.02em]">
          {t("hero.title")}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed" style={{ color: "var(--color-muted)" }}>
          {t("hero.sub")}
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <button className="rounded px-8 py-3 text-base font-medium text-white transition-all hover:opacity-90"
            style={{ background: "var(--color-purple)", boxShadow: "0 4px 14px rgba(83,58,253,0.3)" }}>
            {t("hero.cta1")}
          </button>
          <button className="rounded border px-8 py-3 text-base font-medium transition-colors"
            style={{ borderColor: "var(--color-border)", color: "var(--color-purple)" }}>
            {t("hero.cta2")}
          </button>
        </div>
      </section>

      {/* Trust bar */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <p className="text-center text-xs font-medium uppercase tracking-widest" style={{ color: "var(--color-muted)" }}>
          {t("trust.title")}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-8 text-sm font-medium" style={{ color: "var(--color-muted)" }}>
          {TRUST_LOGOS.map((logo) => <span key={logo}>{logo}</span>)}
        </div>
      </section>

      {/* Features */}
      <section className="border-y" style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-center text-3xl font-light tracking-tight md:text-4xl">{t("features.title")}</h2>
          <p className="mx-auto mt-4 max-w-xl text-center font-light leading-relaxed" style={{ color: "var(--color-muted)" }}>
            {t("features.sub")}
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-lg border p-6 transition-shadow"
                style={{ borderColor: "var(--color-border)", background: "var(--color-bg)" }}>
                <h3 className="text-lg font-light tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed" style={{ color: "var(--color-muted)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark brand section */}
      <section style={{ background: "var(--color-dark-section)" }}>
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-3xl font-light tracking-tight text-white whitespace-pre-line md:text-4xl">{t("dark.title")}</h2>
          <p className="mx-auto mt-4 max-w-xl font-light leading-relaxed text-white/70">{t("dark.sub")}</p>
          <button className="mt-10 rounded bg-white px-8 py-3 text-base font-medium text-[var(--color-dark-section)] transition-all hover:bg-white/90">
            {t("dark.cta")}
          </button>
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-light tracking-tight md:text-4xl">{t("pricing.title")}</h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-light leading-relaxed" style={{ color: "var(--color-muted)" }}>{t("pricing.sub")}</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PRICING.map((plan) => (
            <div key={plan.key} className="relative rounded-lg border p-8"
              style={{
                borderColor: plan.popular ? "var(--color-purple)" : "var(--color-border)",
                background: "var(--color-bg)",
              }}>
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-medium text-white"
                  style={{ background: "var(--color-purple)" }}>
                  {t("pricing.popular")}
                </span>
              )}
              <h3 className="text-lg font-medium">{t(plan.key as any)}</h3>
              <p className="mt-1 text-sm font-light" style={{ color: "var(--color-muted)" }}>{t(plan.desc_key as any)}</p>
              <p className="mt-6">
                <span className="text-4xl font-light tracking-tight">{plan.price}</span>
                <span className="ml-1 text-sm font-light" style={{ color: "var(--color-muted)" }}>{t("pricing.mo")}</span>
              </p>
              <ul className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm font-light" style={{ color: "var(--color-muted)" }}>
                    <Check className="h-4 w-4" style={{ color: "var(--color-green)" }} />
                    {f}
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full rounded py-2.5 text-sm font-medium transition-colors"
                style={plan.popular
                  ? { background: "var(--color-purple)", color: "#fff" }
                  : { border: "1px solid var(--color-border)", color: "var(--color-purple)" }}>
                {t(plan.key === "plan.enterprise" ? "pricing.enterprise_cta" : "pricing.trial_cta")}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t" style={{ borderColor: "var(--color-border)" }}>
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded" style={{ background: "var(--color-purple)" }}>
                <span className="text-xs font-bold text-white">W</span>
              </div>
              <span className="text-sm font-medium">Warp</span>
            </div>
            <p className="text-sm font-light" style={{ color: "var(--color-muted)" }}>{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
