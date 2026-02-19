export const QUADRANTS = {
  do:        { label: "Do First",   icon: "\u{1F534}", color: "#ef4444", description: "Urgent & Important" },
  schedule:  { label: "Schedule",   icon: "\u{1F535}", color: "#3b82f6", description: "Important, Not Urgent" },
  delegate:  { label: "Delegate",   icon: "\u{1F7E1}", color: "#f59e0b", description: "Urgent, Not Important" },
  eliminate: { label: "Eliminate",  icon: "\u26AB",    color: "#6b7280", description: "Neither" },
};

export const STATUS_FILTERS = {
  all: "All",
  active: "Active",
  completed: "Completed",
};

export const QUADRANT_ORDER = ["do", "schedule", "delegate", "eliminate"];
