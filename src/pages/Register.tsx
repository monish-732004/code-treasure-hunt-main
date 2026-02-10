import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { Compass, ArrowLeft, ArrowRight, Check, Users, UserPlus, ClipboardList, PartyPopper } from "lucide-react";
import Navbar from "@/components/Navbar";

const leaderSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  registerNumber: z.string().trim().min(1, "Register number is required").max(30),
  phone: z.string().trim().min(10, "Valid phone number required").max(15),
  email: z.string().trim().email("Valid email required").max(255),
  department: z.string().trim().min(1, "Department is required").max(100),
  year: z.string().min(1, "Year of study is required"),
});

const memberSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  registerNumber: z.string().trim().min(1, "Register number is required").max(30),
  phone: z.string().trim().min(10, "Valid phone number required").max(15),
  email: z.string().trim().email("Valid email required").max(255),
  department: z.string().trim().min(1, "Department is required").max(100),
});

type Leader = z.infer<typeof leaderSchema>;
type Member = z.infer<typeof memberSchema>;

const emptyMember: Member = { name: "", registerNumber: "", phone: "", email: "", department: "" };

const steps = [
  { label: "Team Name", icon: Users },
  { label: "Leader Details", icon: ClipboardList },
  { label: "Members", icon: UserPlus },
  { label: "Confirm", icon: Check },
];

const Register = () => {
  const [step, setStep] = useState(0);
  const [teamName, setTeamName] = useState("");
  const [leader, setLeader] = useState<Leader>({
    name: "", registerNumber: "", phone: "", email: "", department: "", year: "",
  });
  const [members, setMembers] = useState<Member[]>([{ ...emptyMember }, { ...emptyMember }]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const allRegisterNumbers = [
    leader.registerNumber,
    ...members.map((m) => m.registerNumber),
  ].filter(Boolean);

  const hasDuplicateRegNos = () => {
    const set = new Set(allRegisterNumbers);
    return set.size !== allRegisterNumbers.length;
  };

  const validateStep = (): boolean => {
    const errs: Record<string, string> = {};

    if (step === 0) {
      if (!teamName.trim()) errs.teamName = "Team name is required";
    } else if (step === 1) {
      const result = leaderSchema.safeParse(leader);
      if (!result.success) {
        result.error.errors.forEach((e) => {
          errs[`leader.${e.path[0]}`] = e.message;
        });
      }
    } else if (step === 2) {
      const filledMembers = members.filter((m) => m.name.trim());
      if (filledMembers.length < 2) {
        errs.members = "At least 2 additional members required";
      }
      filledMembers.forEach((m, i) => {
        const result = memberSchema.safeParse(m);
        if (!result.success) {
          result.error.errors.forEach((e) => {
            errs[`member.${i}.${e.path[0]}`] = e.message;
          });
        }
      });
      if (hasDuplicateRegNos()) {
        errs.duplicate = "Duplicate register numbers found";
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const next = () => {
    if (validateStep()) setStep((s) => Math.min(s + 1, 4));
  };

  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const updateLeader = (field: keyof Leader, value: string) => {
    setLeader((l) => ({ ...l, [field]: value }));
  };

  const updateMember = (index: number, field: keyof Member, value: string) => {
    setMembers((prev) => prev.map((m, i) => (i === index ? { ...m, [field]: value } : m)));
  };

  const addMember = () => {
    if (members.length < 3) setMembers([...members, { ...emptyMember }]);
  };

  const removeMember = (index: number) => {
    if (members.length > 2) setMembers(members.filter((_, i) => i !== index));
  };

  const inputClass = (errKey: string) =>
    `w-full px-4 py-2.5 rounded-lg border font-body text-sm text-foreground bg-card focus:outline-none focus:ring-2 focus:ring-ring transition-colors ${
      errors[errKey] ? "border-destructive" : "border-border"
    }`;

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-20 flex items-center justify-center px-4">
          <div className="card-scroll max-w-md w-full text-center py-12">
            <PartyPopper className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="font-display text-3xl font-bold text-foreground mb-3">
              Registration Complete!
            </h2>
            <p className="text-muted-foreground font-body mb-2">
              Team <strong className="text-foreground">{teamName}</strong> has been registered.
            </p>
            <p className="text-sm text-muted-foreground font-body mb-8">
              Get ready for the adventure on March 20, 2026!
            </p>
            <Link to="/" className="btn-adventure inline-flex items-center gap-2">
              <Compass className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground font-body mb-2">
              Join the Hunt
            </p>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Register Your <span className="text-gradient-gold">Crew</span>
            </h1>
          </div>

          {/* Step indicator */}
          <div className="flex items-center justify-center gap-2 mb-10">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-body transition-colors ${
                      i <= step
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className={`w-8 md:w-16 h-0.5 transition-colors ${
                        i < step ? "bg-primary" : "bg-border"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className="card-scroll">
            {/* Step 0: Team Name */}
            {step === 0 && (
              <div className="space-y-4">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Name Your Crew
                </h3>
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-1">
                    Team Name
                  </label>
                  <input
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    placeholder="e.g. Code Pirates"
                    className={inputClass("teamName")}
                    maxLength={50}
                  />
                  {errors.teamName && (
                    <p className="text-xs text-destructive mt-1 font-body">{errors.teamName}</p>
                  )}
                </div>
              </div>
            )}

            {/* Step 1: Leader */}
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Captain's Details
                </h3>
                <p className="text-sm text-muted-foreground font-body">
                  The team leader will be Member 1.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(
                    [
                      ["name", "Full Name"],
                      ["registerNumber", "Register Number"],
                      ["phone", "Phone Number"],
                      ["email", "Email ID"],
                      ["department", "Department"],
                    ] as const
                  ).map(([field, label]) => (
                    <div key={field}>
                      <label className="block text-sm font-body font-medium text-foreground mb-1">
                        {label}
                      </label>
                      <input
                        value={leader[field]}
                        onChange={(e) => updateLeader(field, e.target.value)}
                        className={inputClass(`leader.${field}`)}
                        maxLength={field === "email" ? 255 : 100}
                      />
                      {errors[`leader.${field}`] && (
                        <p className="text-xs text-destructive mt-1 font-body">
                          {errors[`leader.${field}`]}
                        </p>
                      )}
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-1">
                      Year of Study
                    </label>
                    <select
                      value={leader.year}
                      onChange={(e) => updateLeader("year", e.target.value)}
                      className={inputClass("leader.year")}
                    >
                      <option value="">Select year</option>
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                      <option value="4">4th Year</option>
                    </select>
                    {errors["leader.year"] && (
                      <p className="text-xs text-destructive mt-1 font-body">
                        {errors["leader.year"]}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Members */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Add Crew Members
                  </h3>
                  {members.length < 3 && (
                    <button
                      onClick={addMember}
                      className="text-sm font-body text-primary hover:underline"
                    >
                      + Add Member
                    </button>
                  )}
                </div>
                {errors.members && (
                  <p className="text-sm text-destructive font-body">{errors.members}</p>
                )}
                {errors.duplicate && (
                  <p className="text-sm text-destructive font-body">{errors.duplicate}</p>
                )}

                {members.map((member, mi) => (
                  <div key={mi} className="p-4 rounded-lg bg-muted/50 border border-border space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-display font-semibold text-foreground">
                        Member {mi + 2}
                      </p>
                      {members.length > 2 && (
                        <button
                          onClick={() => removeMember(mi)}
                          className="text-xs text-destructive hover:underline font-body"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {(
                        [
                          ["name", "Full Name"],
                          ["registerNumber", "Register Number"],
                          ["phone", "Phone Number"],
                          ["email", "Email"],
                          ["department", "Department"],
                        ] as const
                      ).map(([field, label]) => (
                        <div key={field}>
                          <label className="block text-xs font-body text-muted-foreground mb-1">
                            {label}
                          </label>
                          <input
                            value={member[field]}
                            onChange={(e) => updateMember(mi, field, e.target.value)}
                            className={inputClass(`member.${mi}.${field}`)}
                          />
                          {errors[`member.${mi}.${field}`] && (
                            <p className="text-xs text-destructive mt-1 font-body">
                              {errors[`member.${mi}.${field}`]}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <div className="space-y-6">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Confirm Your Crew
                </h3>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mb-1">
                      Team Name
                    </p>
                    <p className="font-display font-bold text-lg text-foreground">{teamName}</p>
                  </div>

                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mb-2">
                      Captain (Member 1)
                    </p>
                    <p className="font-body text-sm text-foreground font-medium">{leader.name}</p>
                    <p className="text-xs text-muted-foreground font-body">
                      {leader.registerNumber} · {leader.department} · Year {leader.year}
                    </p>
                    <p className="text-xs text-muted-foreground font-body">
                      {leader.email} · {leader.phone}
                    </p>
                  </div>

                  {members
                    .filter((m) => m.name.trim())
                    .map((m, i) => (
                      <div key={i} className="p-4 rounded-lg bg-muted/50 border border-border">
                        <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mb-2">
                          Member {i + 2}
                        </p>
                        <p className="font-body text-sm text-foreground font-medium">{m.name}</p>
                        <p className="text-xs text-muted-foreground font-body">
                          {m.registerNumber} · {m.department}
                        </p>
                        <p className="text-xs text-muted-foreground font-body">
                          {m.email} · {m.phone}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              {step > 0 ? (
                <button onClick={prev} className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              ) : (
                <Link to="/" className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Home
                </Link>
              )}
              {step < 3 ? (
                <button onClick={next} className="btn-adventure flex items-center gap-2 text-xs py-2 px-6">
                  Next <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button onClick={handleSubmit} className="btn-gold flex items-center gap-2 text-xs py-2 px-6">
                  <Check className="w-4 h-4" /> Submit Registration
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
