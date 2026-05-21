import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";

const BLUR_FADE_DELAY = 0.04;

export default function BlogPage() {
  return (
    <section id="blog" className="flex flex-col min-h-[60dvh] space-y-10">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="flex flex-col items-center justify-center space-y-6 text-center py-16">
          <BlurFadeText
            delay={BLUR_FADE_DELAY * 3}
            className="text-3xl font-bold tracking-tighter"
            text="I write about things I build."
          />
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            Systems programming, web development, low-level networking, and
            everything in between — all on my Hashnode blog.
          </p>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <a
              href="https://hashnode.com/@Raquibreyaz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background font-medium text-sm hover:opacity-80 transition-opacity duration-200"
            >
              Read on Hashnode →
            </a>
          </BlurFade>
        </div>
      </BlurFade>
    </section>
  );
}
