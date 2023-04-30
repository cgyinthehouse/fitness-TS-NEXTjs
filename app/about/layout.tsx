const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav>About Navbar</nav>
      <main>
        {children}
      </main>
    </div>
  );
};

export default AboutLayout;
