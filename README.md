# Ugbanawaji Ekenekiso

**Software Engineer | Backend Architecture · Distributed Systems · Financial Technology**

I build software that solves difficult business and engineering problems.

Much of my professional work has been in banking and financial technology, where a successful API response isn't enough. Financial transactions must be accounted for, external service outcomes must be verified, and interrupted operations must be recoverable.

My experience spans backend architecture, distributed transaction processing, financial accounting systems, third-party integrations, database engineering, and technical leadership.

I work across Java, PHP, TypeScript, and their ecosystems, choosing technologies based on the problem rather than defining my engineering practice around a particular language.

## Engineering Problems I've Solved

### Making financial transactions reliable

Re-engineered transaction processing for financial service platforms where unreliable provider responses, repeated requests, and interrupted operations could cause incorrect transaction outcomes.

- Designed asynchronous, Saga-based workflows coordinating financial postings, external provider fulfillment, and compensating reversals.
- Implemented request-level idempotency using payload fingerprints, replacing a restrictive five-minute repeat-purchase rule.
- Distinguished confirmed failures from indeterminate provider outcomes, using reconciliation and requery before deciding whether to reverse transactions.
- Built provider integration contracts that isolate external service differences from core business logic.

**Engineering focus:** Distributed workflows, idempotency, asynchronous processing, failure recovery, API integration.

### Making financial accounting traceable

Worked on replacing direct wallet balance mutations with structured financial accounting.

- Designed hierarchical charts of accounts, customer subledgers, double-entry journals, and transaction-linked postings.
- Modelled provider settlements, commissions, gateway fees, overdraft movements, and financial reversals.
- Separated customer account activity from general ledger reporting to improve financial traceability.

**Engineering focus:** Financial domain modelling, ledger architecture, transactional consistency, auditability.

### Modernizing legacy systems without losing financial history

Rebuilt parts of legacy financial platforms with significant data, performance, and reliability challenges.

- Migrated **8,000+ customer records and millions of historical transactions**, preserving customer, wallet, and transaction relationships.
- Developed restart-safe, dependency-aware import workflows with batch processing and database-enforced uniqueness.
- Added reconciliation for record counts, financial balances, and orphaned relationships.
- Redesigned database schemas and indexes, reducing previously slow queries to approximately **40 ms or less**.

**Engineering focus:** Data migration, database design, performance engineering, data integrity.

### Recovering loan repayments safely

Built a queue-driven loan recovery system integrating NIBSS Direct Debit with BankOne core banking.

- Implemented scheduled collections with adaptive debit attempts of 100%, 75%, 50%, and 25% of the outstanding installment.
- Tracked partial repayments and recalculated remaining balances for subsequent collection cycles.
- Built an independent recovery process to reconcile interrupted debit operations.
- Prevented further collection attempts while previous debit outcomes remained unresolved.

**Engineering focus:** Payment orchestration, state machines, retry strategies, financial reconciliation, fault tolerance.

### Building lending and credit assessment workflows

Rebuilt a delayed digital lending application and delivered a working alternative used to process loans.

Integrated identity verification, core banking customer lookup, multiple credit bureaus, configurable credit policies, departmental approval workflows, and loan disbursement operations.

**Engineering focus:** Workflow orchestration, complex business rules, financial service integration, system delivery.

---

## Selected Projects

### Credense — Credit and Risk Infrastructure

A multi-tenant platform designed around how financial institutions assess borrowers and make credit decisions.

Combines credit bureau information, borrower records, repayment histories, and configurable lending policies into structured credit assessment workflows.

**Engineering challenges:** Normalizing inconsistent credit data, modelling financial relationships, evaluating eligibility rules, and maintaining tenant isolation.

**Technologies:** PHP, Laravel, MySQL, React, TypeScript, Inertia.js.

*Private repository.*

### [AI Learn](https://github.com/Tetranyble/ai-learn) — Durable AI Workflows

A Java-based application exploring reliable execution of long-running LLM and agentic workflows.

The architecture addresses problems that emerge when AI operations outlive HTTP requests or clients disconnect during execution.

**Engineering challenges:**
- Persistent conversation and execution state
- Transactional outbox and Redis Streams
- Multi-node event delivery
- WebSocket and server-sent event streaming
- Cancellation, reconnection, and replay
- Idempotency and interrupted execution recovery

**Technologies:** Java, Spring Boot, LangChain4j, MySQL, Redis, JPA/Hibernate.

### [Ugbanawaji](https://github.com/Tetranyble/ugbanawaji) — Publishing Platform

My personal website and content publishing system.

Built around editorial workflows, draft management, scheduled publication, media handling, newsletters, analytics, and AI-assisted content interaction.

**Technologies:** Next.js, React, TypeScript, MySQL, Drizzle ORM, Better Auth.

---

## Engineering Toolkit

**Languages and frameworks:** Java, Spring Boot, PHP, Laravel, TypeScript, React, Next.js.

**Databases and data systems:** MySQL, PostgreSQL, Microsoft SQL Server, Redis, JPA/Hibernate.

**Architecture and integration:** REST APIs, distributed workflows, Saga orchestration, event-driven processing, idempotency, financial ledgers, third-party integrations.

**Infrastructure and delivery:** Docker, Linux, AWS, CI/CD, background jobs, system monitoring, incident investigation.

**Applied AI:** LangChain4j, LLM integrations, durable AI execution, streaming and agentic workflows.

---

## Beyond the Code

I've also worked on core banking disaster recovery, production infrastructure, cybersecurity governance, and technical vendor coordination, including a formal appointment as Chief Information Security Officer at a microfinance bank.

This experience shapes how I approach engineering: software must not only work under ideal conditions; it must also be supportable, recoverable, and understandable when things go wrong.

Some professional work is held in private company repositories. The descriptions above focus on non-confidential engineering responsibilities and outcomes.

## Connect

**Website:** [ugbanawaji.com](https://ugbanawaji.com)

**LinkedIn:** [linkedin.com/in/ugbanawaji](https://www.linkedin.com/in/ugbanawaji)
