import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, ArrowLeft, Brain, Database, BarChart3, Cpu, X } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  icon: React.ReactNode;
  date: string;
  readTime: string;
  category: string;
  fullContent: string;
}

export function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      title: 'The Rise of RAG: Revolutionizing Enterprise AI',
      excerpt: 'Retrieval-Augmented Generation is transforming how businesses leverage LLMs. From reducing hallucinations to enabling real-time knowledge updates, RAG pipelines are becoming essential for production AI systems.',
      icon: <Brain className="w-12 h-12 text-purple-400" />,
      date: 'Jan 2026',
      readTime: '6 min read',
      category: 'AI Engineering',
      fullContent: `
## The Evolution of Enterprise AI

Large Language Models have revolutionized how businesses approach AI, but they come with inherent limitations. Training data becomes stale, hallucinations introduce factual errors, and domain-specific knowledge remains inaccessible. **Retrieval-Augmented Generation (RAG)** addresses these challenges head-on.

### What is RAG?

RAG combines the generative power of LLMs with external knowledge retrieval systems. Instead of relying solely on training data, RAG systems:

1. **Query a vector database** containing your organization's documents
2. **Retrieve relevant context** using semantic similarity search
3. **Augment the prompt** with retrieved information
4. **Generate grounded responses** based on actual source material

### Why RAG Matters for Enterprise

**Reduced Hallucinations**: By grounding responses in retrieved documents, RAG dramatically reduces the risk of AI generating false information. In my work at PM Accelerator, implementing RAG reduced hallucination rates by 73%.

**Real-Time Knowledge**: Unlike fine-tuned models, RAG systems can incorporate new documents instantly. Upload a new policy document, and it's immediately searchable.

**Citation & Audit Trail**: Enterprise compliance requires knowing *where* information came from. RAG provides source citations, enabling audit trails and verification.

### Building Production RAG Pipelines

The key components of a robust RAG system include:

- **Document Processing**: Chunking strategies (semantic vs. fixed-size) significantly impact retrieval quality
- **Embedding Models**: BGE, OpenAI Ada, or domain-specific embeddings
- **Vector Databases**: Pinecone, ChromaDB, Weaviate each have trade-offs
- **Reranking**: Cross-encoder rerankers improve precision but add latency

### The Future: Agentic RAG

The next evolution combines RAG with autonomous agents. Systems that can decide *when* to retrieve, *what* to retrieve, and *how* to synthesize multiple sources represent the cutting edge of enterprise AI architecture.

RAG isn't just a technique—it's becoming the standard architecture for deploying LLMs in production environments where accuracy, recency, and accountability matter.
      `
    },
    {
      title: 'Real-Time Data Pipelines with Apache Kafka & Flink',
      excerpt: 'Modern data engineering demands sub-second latency. Learn how streaming architectures with Kafka and Flink enable exactly-once semantics and process 100K+ events per second for real-time analytics.',
      icon: <Database className="w-12 h-12 text-blue-400" />,
      date: 'Jan 2026',
      readTime: '8 min read',
      category: 'Data Engineering',
      fullContent: `
## The Shift from Batch to Stream

Traditional ETL processes run overnight, delivering insights that are already hours old. In today's competitive landscape, decisions need to happen in real-time. **Apache Kafka and Apache Flink** form the backbone of modern streaming architectures.

### The Streaming Stack

**Apache Kafka** serves as the distributed event log—a persistent, fault-tolerant message bus that can handle millions of events per second. Key concepts:

- **Topics**: Logical channels for different event types
- **Partitions**: Enable parallel processing and horizontal scaling
- **Consumer Groups**: Allow multiple services to process the same stream
- **Exactly-Once Semantics**: Critical for financial and transactional data

**Apache Flink** provides stateful stream processing with:

- **Event Time Processing**: Handle out-of-order events correctly
- **Windowing**: Tumbling, sliding, and session windows for aggregations
- **State Management**: Fault-tolerant checkpointing for exactly-once guarantees
- **SQL Interface**: Familiar query language for streaming data

### Architecture Patterns

**Event Sourcing**: Store all changes as immutable events. The current state is derived by replaying the event log.

**CQRS (Command Query Responsibility Segregation)**: Separate read and write models, optimizing each for its use case.

**Lambda Architecture**: (Mostly deprecated) Combine batch and stream processing for both accuracy and speed.

**Kappa Architecture**: All processing happens on the stream. Batch is just a bounded stream.

### Real-World Implementation

At Sandron Impex, I built a streaming pipeline processing 100K+ IoT sensor readings per minute:

1. **Ingestion**: Kafka Connect capturing sensor data via MQTT bridge
2. **Processing**: Flink jobs for anomaly detection and aggregation
3. **Serving**: Results pushed to Redis for sub-millisecond queries
4. **Storage**: Raw events archived to Delta Lake for historical analysis

### Performance Optimization

Key techniques for high-throughput streaming:

- **Batch size tuning**: Balance latency vs. throughput
- **Partition strategy**: Hash on high-cardinality keys
- **Serialization**: Avro/Protobuf over JSON for efficiency
- **Backpressure handling**: Prevent cascading failures

The future belongs to real-time data. Organizations that can act on events as they happen will outcompete those still waiting for overnight batch jobs.
      `
    },
    {
      title: 'From Dashboards to Decisions: The Evolution of BI',
      excerpt: 'Business Intelligence is shifting from descriptive to prescriptive analytics. Self-serve analytics, embedded BI, and AI-augmented insights are reshaping how organizations make data-driven decisions.',
      icon: <BarChart3 className="w-12 h-12 text-green-400" />,
      date: 'Dec 2025',
      readTime: '5 min read',
      category: 'Business Intelligence',
      fullContent: `
## Beyond Static Dashboards

The first generation of BI focused on visualizing historical data—what happened? Modern BI goes further, answering why it happened, what will happen, and what we should do about it.

### The Analytics Maturity Model

1. **Descriptive**: What happened? (Traditional dashboards)
2. **Diagnostic**: Why did it happen? (Root cause analysis)
3. **Predictive**: What will happen? (ML-powered forecasting)
4. **Prescriptive**: What should we do? (Automated recommendations)

Most organizations are stuck between levels 1 and 2. The opportunity lies in climbing to levels 3 and 4.

### Self-Serve Analytics

Data teams can't scale if every question requires a data request. Self-serve analytics empowers business users:

- **Semantic Layer**: Business-friendly definitions over raw data
- **Governed Datasets**: Pre-approved, documented, and certified
- **Natural Language Queries**: Ask questions in plain English
- **Embedded Analytics**: BI widgets within operational applications

### The Modern BI Stack

**Data Sources** → **Data Warehouse** → **Semantic Layer** → **Visualization**

- **Snowflake/BigQuery**: Scalable cloud data warehouses
- **dbt**: Transformations as code with version control
- **Looker/Tableau**: Enterprise visualization platforms
- **Streamlit/Gradio**: Custom analytical applications

### AI-Augmented BI

The next frontier combines BI with AI:

- **Automated Insights**: Algorithms surface anomalies and trends without manual exploration
- **Predictive Features**: ML models integrated directly into dashboards
- **Conversational Analytics**: Chat-based interfaces for data exploration
- **Augmented Data Prep**: AI-assisted data cleaning and transformation

### Building an Insights-Driven Culture

Technology alone isn't enough. Successful BI initiatives require:

- **Executive Sponsorship**: Top-down commitment to data-driven decisions
- **Data Literacy Programs**: Training employees to interpret data
- **Metric Definitions**: Agreed-upon KPIs with clear ownership
- **Feedback Loops**: Measure the impact of data-driven decisions

The organizations winning today are those that have democratized data access while maintaining governance—enabling everyone to make better decisions faster.
      `
    },
    {
      title: 'MLOps: Bridging the Gap Between Data Science & Production',
      excerpt: 'Only 22% of ML projects make it to production. MLOps practices including model versioning, automated retraining, and drift detection are critical for sustainable AI systems.',
      icon: <Cpu className="w-12 h-12 text-orange-400" />,
      date: 'Dec 2025',
      readTime: '7 min read',
      category: 'Data Science',
      fullContent: `
## The Production Gap

Data scientists build incredible models in notebooks. But getting those models into production, monitoring them, and maintaining them over time? That's where most projects fail. **MLOps** bridges this gap.

### Why Models Fail in Production

1. **Training-Serving Skew**: Features computed differently in notebooks vs. production
2. **Data Drift**: The world changes, but the model doesn't
3. **Lack of Monitoring**: No visibility into model performance
4. **Manual Processes**: Retraining requires data scientist intervention
5. **No Version Control**: Can't reproduce or roll back model versions

### The MLOps Stack

**Experimentation → Training → Deployment → Monitoring**

- **MLflow/Weights & Biases**: Experiment tracking and model registry
- **Feature Stores**: Centralized feature computation (Feast, Tecton)
- **Model Serving**: FastAPI, Seldon, KServe, SageMaker
- **Monitoring**: Evidently, Arize, WhyLabs for drift detection

### Key Practices

**Model Versioning**: Every model artifact should be versioned with:
- Training data hash
- Feature definitions
- Hyperparameters
- Performance metrics

**Automated Retraining**: Trigger retraining based on:
- Performance degradation
- Data drift thresholds
- Scheduled intervals
- Data availability

**A/B Testing & Canary Deployments**: Don't deploy new models to 100% of traffic immediately. Gradually roll out and compare.

**Feature Engineering Pipelines**: Ensure training and serving use identical feature computation logic.

### Monitoring in Production

The most critical—and often neglected—aspect of MLOps:

- **Input Monitoring**: Are features within expected ranges?
- **Output Monitoring**: Are predictions distributed as expected?
- **Performance Monitoring**: Actual outcomes vs. predictions
- **Model Explanations**: Why is the model making certain predictions?

### Building the MLOps Culture

MLOps isn't just tools—it's a mindset shift:

- Data scientists own models through production
- Engineering and data science collaborate closely
- Automation is the default, not the exception
- Observability is built-in from the start

The 78% of ML projects that fail share a common pattern: treating deployment as the finish line. In reality, production deployment is just the beginning. MLOps practices ensure your models deliver value continuously, not just on day one.
      `
    },
  ];

  return (
    <>
      <section id="blog" className="relative min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-white mb-4"
          >
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Thoughts</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/60 mb-12 text-lg"
          >
            Insights on AI Engineering, Data Science, Data Engineering & Business Intelligence
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedPost(post)}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
              >
                {/* Icon Header */}
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                  {post.icon}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs text-white/80">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-white/60">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl text-white mb-3 group-hover:text-blue-400 transition-colors font-semibold">
                    {post.title}
                  </h3>

                  <p className="text-white/70 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center gap-2 text-blue-400 group-hover:gap-4 transition-all">
                    <span>Read More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Full Article Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-start justify-center p-4 md:p-8"
            style={{ overflowY: 'auto' }}
            onClick={() => setSelectedPost(null)}
            onWheel={(e) => e.stopPropagation()}
          >
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              className="w-full max-w-4xl bg-gradient-to-b from-gray-900 to-black rounded-3xl border border-white/10 overflow-hidden my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                {selectedPost.icon}

                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>

                <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-sm text-white/90 font-medium">
                  {selectedPost.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-6 mb-6 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>{selectedPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <span>{selectedPost.readTime}</span>
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl text-white mb-8 font-bold leading-tight">
                  {selectedPost.title}
                </h1>

                <div
                  className="prose prose-invert prose-lg max-w-none
                    prose-headings:text-white prose-headings:font-bold
                    prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                    prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                    prose-p:text-white/80 prose-p:leading-relaxed
                    prose-strong:text-blue-400
                    prose-ul:text-white/80
                    prose-li:marker:text-purple-400"
                  style={{
                    whiteSpace: 'pre-line',
                    lineHeight: '1.8'
                  }}
                >
                  {selectedPost.fullContent.split('\n').map((line, i) => {
                    if (line.startsWith('## ')) {
                      return <h2 key={i} className="text-2xl font-bold text-white mt-8 mb-4">{line.replace('## ', '')}</h2>;
                    }
                    if (line.startsWith('### ')) {
                      return <h3 key={i} className="text-xl font-semibold text-white/90 mt-6 mb-3">{line.replace('### ', '')}</h3>;
                    }
                    if (line.startsWith('- **')) {
                      const parts = line.replace('- **', '').split('**:');
                      return (
                        <p key={i} className="text-white/80 mb-2 pl-4">
                          • <strong className="text-blue-400">{parts[0]}</strong>:{parts[1] || ''}
                        </p>
                      );
                    }
                    if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || line.startsWith('4. ') || line.startsWith('5. ')) {
                      const num = line.charAt(0);
                      const content = line.substring(3);
                      const boldMatch = content.match(/\*\*([^*]+)\*\*/);
                      if (boldMatch) {
                        const parts = content.split(/\*\*[^*]+\*\*/);
                        return (
                          <p key={i} className="text-white/80 mb-2 pl-4">
                            {num}. {parts[0]}<strong className="text-blue-400">{boldMatch[1]}</strong>{parts[1] || ''}
                          </p>
                        );
                      }
                      return <p key={i} className="text-white/80 mb-2 pl-4">{line}</p>;
                    }
                    if (line.includes('**') && !line.startsWith('-')) {
                      const parts = line.split(/\*\*([^*]+)\*\*/g);
                      return (
                        <p key={i} className="text-white/80 mb-4">
                          {parts.map((part, j) =>
                            j % 2 === 1 ? <strong key={j} className="text-blue-400">{part}</strong> : part
                          )}
                        </p>
                      );
                    }
                    if (line.trim() === '') return null;
                    return <p key={i} className="text-white/80 mb-4">{line}</p>;
                  })}
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                  >
                    <ArrowLeft size={20} />
                    <span>Back to Articles</span>
                  </button>

                  <div className="text-white/40 text-sm">
                    Written by Shivaraj Senthil Rajan
                  </div>
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
