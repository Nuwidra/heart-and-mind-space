import { Play, ChevronRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TopicCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: "primary" | "rose" | "accent" | "olive" | "secondary";
  videos: {
    title: string;
    locked?: boolean;
  }[];
  index: number;
}

const colorClasses = {
  primary: {
    bg: "bg-primary/10",
    border: "border-primary/20",
    icon: "bg-primary text-primary-foreground",
    hover: "hover:border-primary/40",
  },
  rose: {
    bg: "bg-rose/10",
    border: "border-rose/20",
    icon: "bg-rose text-rose-foreground",
    hover: "hover:border-rose/40",
  },
  accent: {
    bg: "bg-accent/10",
    border: "border-accent/20",
    icon: "bg-accent text-accent-foreground",
    hover: "hover:border-accent/40",
  },
  olive: {
    bg: "bg-olive/10",
    border: "border-olive/20",
    icon: "bg-olive text-olive-foreground",
    hover: "hover:border-olive/40",
  },
  secondary: {
    bg: "bg-secondary/30",
    border: "border-secondary/40",
    icon: "bg-secondary text-secondary-foreground",
    hover: "hover:border-secondary/60",
  },
};

const TopicCard = ({ title, description, icon, color, videos, index }: TopicCardProps) => {
  const colors = colorClasses[color];

  return (
    <div
      className={cn(
        "group relative rounded-2xl border-2 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2",
        colors.bg,
        colors.border,
        colors.hover,
        "animate-fade-in-up"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Icon */}
      <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg", colors.icon)}>
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-xl font-serif font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>

      {/* Video list */}
      <div className="space-y-2 mb-4">
        {videos.map((video, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 p-2 rounded-lg bg-card/50 hover:bg-card transition-colors cursor-pointer group/video"
          >
            <div className={cn("w-8 h-8 rounded-full flex items-center justify-center", colors.icon)}>
              {video.locked ? <Lock className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            </div>
            <span className="text-sm text-foreground flex-1">{video.title}</span>
            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover/video:text-primary transition-colors" />
          </div>
        ))}
      </div>

      {/* CTA */}
      <Button variant="ghost" className="w-full group-hover:bg-card">
        Explorar Tema
        <ChevronRight className="w-4 h-4 ml-1" />
      </Button>
    </div>
  );
};

export default TopicCard;
