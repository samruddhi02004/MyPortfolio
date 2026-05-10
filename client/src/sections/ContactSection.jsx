import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Github,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useMemo, useState } from "react";

const CONTACT_EMAIL = "gaikwadsamruddhi97@gmail.com";
const DEFAULT_EMAIL_SUBJECT = "Portfolio inquiry";

export const ContactSection = () => {
  const { toast } = useToast();
  const [message, setMessage] = useState("");
  const [charCount, setCharCount] = useState(0);
  const isMessageEmpty = !message.trim();

  const mailtoHref = useMemo(() => {
    const body = message.trim();
    const params = new URLSearchParams();
    params.set("subject", DEFAULT_EMAIL_SUBJECT);
    if (body) params.set("body", body);
    return `mailto:${CONTACT_EMAIL}?${params.toString()}`;
  }, [message]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      toast({
        title: "Email copied",
        description: CONTACT_EMAIL,
        variant: "success",
      });
    } catch {
      toast({
        title: "Couldn't copy email",
        description: `Please copy it manually: ${CONTACT_EMAIL}`,
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-primary/10 text-primary mb-3 sm:mb-4">
            Let&apos;s Connect
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m a B.Tech IT student interested in AI, Analytics, and development. Open to internships, collaborations, and meaningful projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary/20 to-background border border-border">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-primary"></span>
              Contact Details
            </h3>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-accent/30 rounded-lg sm:rounded-xl transition-all duration-300">
                <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-sm sm:text-base font-medium hover:text-primary transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
              
              
              
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-accent/30 rounded-lg sm:rounded-xl transition-all duration-300">
                <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Location</p>
                  <span className="text-sm sm:text-base font-medium">
                    Pune,Maharashtra India
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 sm:pt-8">
              <h4 className="font-medium mb-3 sm:mb-4 text-xs sm:text-sm text-muted-foreground">Find me on</h4>
              <div className="flex gap-2 sm:gap-3">
                {[
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    url: "https://www.linkedin.com/in/samruddhi-gaikwad-71042a28a",
                  },
                  {
                    icon: Twitter,
                    label: "Twitter",
                    url: "#",
                  },
                  {
                    icon: Github,
                    label: "GitHub",
                    url: "https://github.com/samruddhi02004",
                  },
                  
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-accent hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mailto Contact */}
          <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-card border border-border shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-primary"></span>
              Email Me Directly
            </h3>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base text-muted-foreground">
                Type a quick note for me ..!!
              </p>

              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="text-xs sm:text-sm font-medium text-muted-foreground flex items-center gap-1"
                >
                  <MessageSquare className="h-3 w-3" />
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    setCharCount(e.target.value.length);
                  }}
                  maxLength={1000}
                  rows={6}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none text-sm sm:text-base"
                  placeholder="Hey Samruddhi, I'd like to talk about..."
                />
                <div className="flex items-center justify-end">
                  <div
                    className={cn(
                      "text-xs",
                      charCount > 750 ? "text-yellow-500" : "text-muted-foreground"
                    )}
                  >
                    {charCount}/1000
                  </div>
                </div>
              </div>

              <motion.a
                href={mailtoHref}
                aria-disabled={isMessageEmpty}
                tabIndex={isMessageEmpty ? -1 : 0}
                className={cn(
                  "w-full flex items-center justify-center gap-2 py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-medium transition-all duration-300 shadow-lg text-sm sm:text-base",
                  "bg-gradient-to-r from-primary to-purple-600 text-white hover:opacity-90 shadow-primary/20",
                  isMessageEmpty && "opacity-60 cursor-not-allowed"
                )}
                onClick={(e) => {
                  if (isMessageEmpty) {
                    e.preventDefault();
                    toast({
                      title: "Add a short message",
                      description: "Write a quick note first, then click to open your email app.",
                      variant: "destructive",
                    });
                  }
                }}
                whileHover={!isMessageEmpty ? { scale: 1.02 } : {}}
                whileTap={!isMessageEmpty ? { scale: 0.98 } : {}}
              >
                Open Email App
                <Send size={16} className="sm:size-[18px]" />
              </motion.a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-medium border border-border bg-background hover:bg-accent/40 transition-all duration-300 text-sm sm:text-base"
              >
                Copy Email Address
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
