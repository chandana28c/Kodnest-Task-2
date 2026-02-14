import { useState } from 'react'
import { TopBar } from './components/layout/TopBar'
import { ContextHeader } from './components/layout/ContextHeader'
import { ProofFooter } from './components/layout/ProofFooter'
import { Card } from './components/ui/Card/Card'
import { Button } from './components/ui/Button/Button'
import { Input } from './components/ui/Input/Input'
import './App.css'

function App() {
    const [step, setStep] = useState(1);
    const totalSteps = 5;

    return (
        <div className="app-layout">
            <TopBar
                projectName="KodNest Premium Build System"
                currentStep={step}
                totalSteps={totalSteps}
                status="In Progress"
            />

            <main className="main-content">
                <ContextHeader
                    title="Configure Build Parameters"
                    description="Define the core settings for your premium SaaS application. Ensure all fields are calm and intentional."
                />

                <div className="workspace-container">
                    {/* Primary Workspace (70%) */}
                    <div className="primary-workspace">
                        <Card title="Project Configuration">
                            <div className="form-grid">
                                <Input label="Project Name" placeholder="e.g. Acme Corp SaaS" />
                                <Input label="Domain" placeholder="e.g. app.acme.com" />
                                <div className="form-row">
                                    <Input label="Primary Color" placeholder="#8B0000" />
                                    <Input label="Font Family" placeholder="Inter" />
                                </div>
                            </div>
                            <div className="action-row">
                                <Button variant="secondary" onClick={() => console.log('Reset')}>Reset Defaults</Button>
                                <Button variant="primary" onClick={() => setStep(Math.min(step + 1, totalSteps))}>Save & Continue</Button>
                            </div>
                        </Card>

                        <Card title="Module Selection" className="mt-24">
                            <div className="module-grid">
                                {['Auth System', 'Billing Portal', 'User Dashboard', 'Admin Panel'].map((item) => (
                                    <div className="module-item" key={item}>
                                        <input type="checkbox" id={`mod-${item}`} />
                                        <label htmlFor={`mod-${item}`}>{item}</label>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>

                    {/* Secondary Panel (30%) */}
                    <div className="secondary-panel">
                        <Card title="AI Guidance">
                            <p className="guidance-text">
                                This step initializes the core react structure.
                                Ensure you have selected the correct branding colors before proceeding.
                            </p>

                            <div className="prompt-box">
                                <p className="prompt-text">Create a premium dashboard with dark sidebar and light content area...</p>
                                <Button variant="ghost" className="copy-btn">Copy</Button>
                            </div>

                            <div className="panel-actions">
                                <Button variant="secondary" className="full-width">Build in Lovable</Button>
                                <Button variant="secondary" className="full-width">Add Screenshot</Button>
                                <div className="row-actions">
                                    <Button variant="ghost" className="error-btn">Error</Button>
                                    <Button variant="ghost" className="success-btn">It Worked</Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </main>

            <ProofFooter />
        </div>
    )
}

export default App
