# SKILLS.md — Tech Stack & Competency Structure

This doc is both (a) the source-of-truth content for the site's Skills section, and (b) a reference for the build agent so skill tags/groupings stay consistent across Hero, Spotlight, and Skills components.

## Tier 1 — AI / Computer Vision *(primary positioning)*
| Category | Tools/Concepts |
|---|---|
| Languages | Python |
| Classical CV | OpenCV |
| Deep Learning frameworks | PyTorch, TensorFlow |
| Detection/Tracking models | YOLO, MediaPipe |
| Core concepts | Object detection, real-time tracking, pose estimation, image segmentation |

## Tier 2 — Full-Stack / Product
| Category | Tools |
|---|---|
| Frontend | Next.js, React, React Native (Expo), Tailwind CSS |
| Backend | Node.js, NestJS, Express |
| Data | Supabase, PostgreSQL, Drizzle ORM |
| Tooling / DevOps | Vercel, Turborepo, Git |

## Tier 3 — AI Integration / Automation
| Category | Tools |
|---|---|
| Workflow automation | n8n, agentic workflows |
| Integration | API design/integration |

## Display rules (for the build agent)
- Render as **two or three grouped tag blocks**, never one flat cloud — grouping is the whole point (signals depth, not a buzzword list).
- Tier 1 (AI/CV) always displays first / most prominently — it's the differentiator.
- Each tag uses the mono font (IBM Plex Mono) to match the "detection label" motif established in the design system.
- Cross-reference: Smart Cric and Facial Attendance projects should link/tag back to specific Tier 1 skills used (e.g., Smart Cric → YOLO, OpenCV, real-time tracking) so Skills and Projects reinforce each other instead of repeating generic lists.

## To finalize before build
- [ ] Confirm exact YOLO version (YOLOv5/v8/etc.) or note if custom-trained
- [ ] Confirm any additional CV libraries used (e.g., dlib, scikit-image)
- [ ] Confirm deep learning framework used per project (PyTorch vs TensorFlow — may differ by project)
- [ ] Add any cloud/MLOps tools if used (e.g., model deployment, ONNX, TensorRT)
