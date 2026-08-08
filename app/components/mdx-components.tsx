export const mdxComponents = {
  h1: (props: React.ComponentProps<"h1">) => (
    <h1
      className="text-cream text-4xl md:text-5xl mt-6 mb-2"
      style={{ fontFamily: "Hanuman", fontWeight: 400 }}
      {...props}
    />
  ),
  h2: (props: React.ComponentProps<"h2">) => (
    <h2
      className="text-cream text-3xl md:text-4xl mt-5 mb-2"
      style={{ fontFamily: "Hanuman", fontWeight: 400 }}
      {...props}
    />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p
      className="text-green text-base text-xl md:text-2xl mb-4 leading-relaxed"
      style={{ fontFamily: "Habibi" }}
      {...props}
    />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="list-disc list-inside text-xl text-green mb-4" {...props} />
  ),
  strong: (props: React.ComponentProps<"strong">) => (
    <strong className="text-blue" {...props} />
  ),
  
  a: (props: React.ComponentProps<"a">) => (
    <a
    className="text-blue underline hover:opacity-80 transition"
    {...props}
    />
    ),

};