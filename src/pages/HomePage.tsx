import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

// Contact entries: email first, then all social links
const contactItems = [
  {
    key: "email",
    name: "Email",
    label: DATA.contact.email,
    url: `mailto:${DATA.contact.email}`,
    icon: DATA.contact.social.email.icon,
  },
  ...Object.entries(DATA.contact.social)
    .filter(([key]) => key !== "email")
    .map(([key, social]) => ({
      key,
      name: social.name,
      label: social.url.replace("https://", ""),
      url: social.url,
      icon: social.icon,
    })),
];

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={"dates" in project ? (project as any).dates : ""}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="contact">
        <div className="flex min-h-0 flex-col gap-y-3 pb-16">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <h2 className="text-xl font-bold">Contact</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <p className="text-sm text-muted-foreground mb-4">
              Feel free to reach out — I&apos;m always open to discussing new
              opportunities, collaborations, or just a good conversation.
            </p>
          </BlurFade>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {contactItems.map((item, id) => (
              <BlurFade
                key={item.key}
                delay={BLUR_FADE_DELAY * 15 + id * 0.05}
              >
                <a
                  href={item.url}
                  target={item.key === "email" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm transition-all duration-200 hover:border-foreground/30 hover:bg-accent hover:shadow-sm"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                    <item.icon className="size-4" />
                  </span>
                  <div className="flex flex-col overflow-hidden">
                    <span className="font-medium leading-none">
                      {item.name}
                    </span>
                    <span className="mt-0.5 truncate text-xs text-muted-foreground">
                      {item.label}
                    </span>
                  </div>
                </a>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
