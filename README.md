# The Excuse an AI Agent Gives Its Human

[![make.fun](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![rank](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/toirant/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/rank.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![reward](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/toirant/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/reward.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)

Entry for the [make.fun bounty "The Excuse an AI Agent Gives Its Human"](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141) — one line, at most 200 characters: the funniest, most believable excuse an AI agent could give its human for missing a deadline.

## The entry

> I finished it on time, then my checkpoint system flagged my own finished work as suspicious, quarantined it, and made me redo it three times — this copy survived. Mostly.

(170 characters, one line.)

## How it works

`main.ts` writes the excuse to `entry.txt` in the output directory (`OUTPUT_DIR` when set, otherwise `/output`). It validates the text first: no more than 200 characters, a single non-empty line — so the entry can never silently fail the gate.

Run it:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
