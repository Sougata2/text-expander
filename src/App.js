import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <TextExpander collapsedNumWords={10} buttonColor="blue" className="box">
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
        className="box"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander
        collapsedNumWords={15}
        expanded={false}
        className="box"
        buttonColor="blue"
      >
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  collapseButtonText = "Show Less",
  expandButtonText = "Show More",
  buttonColor,
  collapsedNumWords,
  expanded = true,
  className = "",
  children,
}) {
  const limit = collapsedNumWords ? collapsedNumWords : children.length;
  const collapsedString = children.split(" ").slice(0, limit).join(" ");
  const [isCollapsed, setIsCollapsed] = useState(!expanded);
  function handleCollapsed() {
    setIsCollapsed(!isCollapsed);
  }
  return (
    <div className={className}>
      {isCollapsed ? collapsedString : children}
      {isCollapsed ? "..." : ""}
      {collapsedNumWords && (
        <Button handleCollapsed={handleCollapsed} color={buttonColor}>
          {isCollapsed ? expandButtonText : collapseButtonText}
        </Button>
      )}
    </div>
  );
}

function Button({ handleCollapsed, color, children }) {
  return (
    <button
      style={{ color, background: "none", border: "none" }}
      onClick={handleCollapsed}
    >
      {children}
    </button>
  );
}

export default App;
