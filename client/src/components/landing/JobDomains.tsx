import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const domains = [
  "Software Engineering",
  "Data Science",
  "Product Management",
  "Marketing",
  "Sales",
  "Customer Service",
  "Human Resources",
  "Finance",
  "Design",
  "Operations",
] as const;
interface JobDomainsProps {
  value: string;
  onChange: (value: string) => void;
}
const JobDomains = ({ value, onChange }: JobDomainsProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select job domain" />
      </SelectTrigger>
      <SelectContent>
        {domains.map((domain) => (
          <SelectItem key={domain} value={domain}>
            {domain}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
export default JobDomains;
