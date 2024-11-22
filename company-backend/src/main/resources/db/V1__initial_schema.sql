CREATE TABLE companies (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    website VARCHAR(255),
    phone VARCHAR(50),
    company_size VARCHAR(20),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    version BIGINT NOT NULL DEFAULT 0
);

CREATE TABLE providers (
    id UUID PRIMARY KEY REFERENCES companies(id),
    support_model VARCHAR(50),
    customization_available BOOLEAN DEFAULT false
);

CREATE TABLE seekers (
    id UUID PRIMARY KEY REFERENCES companies(id),
    implementation_timeline VARCHAR(50),
    budget_range VARCHAR(50)
);

CREATE TABLE attribute_definitions (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    type VARCHAR(50) NOT NULL,
    description TEXT,
    required BOOLEAN DEFAULT false,
    validation_rules TEXT,
    applicable_to VARCHAR(20) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE attribute_values (
    id UUID PRIMARY KEY,
    company_id UUID NOT NULL REFERENCES companies(id),
    definition_id UUID NOT NULL REFERENCES attribute_definitions(id),
    value TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(company_id, definition_id)
);

-- Indices
CREATE INDEX idx_companies_email ON companies(email);
CREATE INDEX idx_attribute_values_company ON attribute_values(company_id);
CREATE INDEX idx_attribute_values_definition ON attribute_values(definition_id);