---
title: Lessons Learned
layout: default
nav_order: 7
---

## Lessons Learned / Common Mistakes

- Forgetting to include lanyard holes
- Forgetting to check for potential shorts from lanyard clips
- Forgetting to run DRC (Design Rule Check) and ERC (Electrical Rule Check) before creating GERBERs after ensuring the schematic is synced with the PCB
- Not printing out a 1:1 scale copy of your design (without silk layer if it clutters things up).  If you have the components, lay them on your design and make sure you have the right footprints.  Or if you have different components on-hand, but with the same footprint, you can use those as well.  
- Assuming just because a technique can be used to assemble 1 badge works it mean it scales well to 100
- Ignoring weird behavior/magic smoke incidents and dismissing them as “flukes” when they might actually be indicative of a low-probability (e.g., 10%) failure mode that WILL bite you in the ass at scale
- Not spending the extra money on a solder stencil 
- Footprints should always show direction of components.
- Sacrificing ease of manufacturing to save cost; the extra time/effort that has gone into manufacturing has cost a lot more than it has saved.
- Vias and plated through holes will suck in solder. Don't put vias in SMD pads unless you like half your joints to be dry after reflow. Use a short trace to a via instead.
- Assuming that the polarity of a LED is the same across colors within the same manufacturer and same footprint.
