const fs = require("fs"); const content = fs.readFileSync("AboutUs.tsx", "utf8"); const newContent = content.replace(/<iframe[^>]*>[\s\S]*?<\/iframe>/, `<iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://player.vimeo.com/video/205116941?background=1&autoplay=1&loop=1&byline=0&title=0&#t=478s"
                allow="autoplay; fullscreen"
                allowFullScreen
                frameBorder="0"
                title="40 Year PC Anniversary Video"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none"
                }}
              ></iframe>`); fs.writeFileSync("AboutUs.tsx", newContent);
