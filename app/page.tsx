import { profile, experience, education, skills, type Role } from "@/lib/profile";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[var(--tracking-widest)] text-ink-soft">
      {children}
    </h2>
  );
}

function RoleEntry({ role, isCurrent }: { role: Role; isCurrent: boolean }) {
  return (
    <div className="grid gap-x-8 gap-y-2 sm:grid-cols-[10rem_1fr]">
      <div className="pt-0.5 text-sm text-ink-soft">
        <div>{role.dates}</div>
        <div className="text-ink-faint">{role.duration}</div>
        {role.employment ? <div className="text-ink-faint">{role.employment}</div> : null}
      </div>

      <div>
        <h4 className="font-[family-name:var(--font-display)] text-lg font-semibold text-ink">
          {role.title}
          {isCurrent ? (
            <span
              className="ml-3 align-middle text-xs font-medium uppercase tracking-[var(--tracking-widest)] text-accent-text"
              aria-label="Current role"
            >
              Now
            </span>
          ) : null}
        </h4>

        {role.note ? <p className="mt-1 text-sm text-ink-faint">{role.note}</p> : null}
        {role.summary ? <p className="mt-2 text-ink-soft">{role.summary}</p> : null}

        {role.bullets ? (
          <ul className="mt-3 space-y-2">
            {role.bullets.map((line) => (
              <li key={line} className="relative pl-5 text-ink-soft">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[0.7em] h-px w-3 bg-line-strong"
                />
                {line}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="mx-auto max-w-[1120px] px-6 py-16 sm:py-24">
      <header className="max-w-[70ch]">
        <p className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[var(--tracking-widest)] text-ink-soft">
          {profile.current} · {profile.location}
        </p>

        <h1 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2.25rem,4vw,3.5rem)] font-bold leading-[1.2] tracking-[-0.03em] text-ink">
          {profile.name}
          <span className="ml-3 align-middle text-base font-normal tracking-normal text-ink-faint">
            {profile.pronouns}
          </span>
        </h1>

        <div aria-hidden="true" className="mt-6 h-px w-16 bg-accent" />

        <p className="mt-6 text-lg text-ink-soft">{profile.headline}</p>

        <nav className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href={profile.site.href} className="text-ink underline-offset-4">
            {profile.site.label}
          </a>
          <a href={profile.linkedin.href} className="text-ink underline-offset-4">
            {profile.linkedin.label}
          </a>
        </nav>

        <ul className="mt-8 flex flex-wrap gap-2">
          {profile.topSkills.map((skill) => (
            <li
              key={skill}
              className="print-plain rounded-[4px] border border-line bg-surface px-3 py-1 text-sm text-ink-soft"
            >
              {skill}
            </li>
          ))}
        </ul>
      </header>

      <section className="mt-20 border-t border-line pt-10">
        <SectionLabel>Experience</SectionLabel>

        <div className="mt-10 space-y-16">
          {experience.map((company) => (
            <article key={company.name}>
              <div className="grid gap-x-8 gap-y-1 sm:grid-cols-[10rem_1fr]">
                <div />
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink">
                    {company.name}
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft">
                    {company.meta}
                    {company.location ? (
                      <>
                        <span aria-hidden="true"> · </span>
                        {company.location}
                      </>
                    ) : null}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-10">
                {company.roles.map((role) => (
                  <RoleEntry
                    key={role.title}
                    role={role}
                    isCurrent={role.dates.endsWith("Present")}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 border-t border-line pt-10">
        <SectionLabel>Education</SectionLabel>

        <div className="mt-10 space-y-10">
          {education.map((entry) => (
            <div key={entry.school} className="grid gap-x-8 gap-y-2 sm:grid-cols-[10rem_1fr]">
              <div className="pt-0.5 text-sm text-ink-soft">{entry.dates}</div>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-ink">
                  {entry.school}
                </h3>
                <p className="mt-1 text-ink-soft">{entry.degree}</p>
                {entry.activities ? (
                  <p className="mt-1 text-sm text-ink-faint">{entry.activities}</p>
                ) : null}
                {entry.detail ? <p className="mt-3 text-ink-soft">{entry.detail}</p> : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 border-t border-line pt-10">
        <SectionLabel>Skills</SectionLabel>

        <ul className="mt-8 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="print-plain rounded-[4px] border border-line bg-surface px-3 py-1 text-sm text-ink-soft"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-20 border-t border-line pt-8 text-sm text-ink-faint">
        <p>
          {profile.name}. {profile.location}.
        </p>
      </footer>
    </main>
  );
}
