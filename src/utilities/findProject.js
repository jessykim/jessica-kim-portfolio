import { projects } from "../data/projects";
import { hyphenateWords } from "./hyphenateWords";

function findProject(string) {
  return projects.filter(project => hyphenateWords(project.title) === string)
}

export { findProject }