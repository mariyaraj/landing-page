package com.ai2connect.cms.domain.model;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.ai2connect.cms.domain.model.attribute.AttributeValue;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.persistence.Version;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "companies")
@Inheritance(strategy = InheritanceType.JOINED)
@EntityListeners(AuditingEntityListener.class)
@Getter
@Setter
@NoArgsConstructor
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    private String website;

    private String phone;

    @Column(name = "company_size")
    @Enumerated(EnumType.STRING)
    private CompanySize companySize;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private CompanyStatus status = CompanyStatus.DRAFT;

    @OneToMany(
        mappedBy = "company", 
        cascade = CascadeType.ALL, 
        orphanRemoval = true,
        fetch = FetchType.LAZY
    )
    private Set<AttributeValue> attributes = new HashSet<>();

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt=LocalDateTime.now();

    @LastModifiedDate
    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt=LocalDateTime.now();

    @Version
    private Long version;

    // Methode zum Hinzufügen eines generischen Attributs
    public void addAttribute(String attributeName, String attributeValue) {
        AttributeValue attribute = new AttributeValue(attributeName, attributeValue);
        attribute.setCompany(this);
        attributes.add(attribute);
    }

    // Methode zum Entfernen eines Attributs
    public void removeAttribute(AttributeValue attribute) {
        attributes.remove(attribute);
        attribute.setCompany(null);
    }

	public UUID getId() {
		return id;
	}

	public void setId(UUID id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public CompanySize getCompanySize() {
		return companySize;
	}

	public void setCompanySize(CompanySize companySize) {
		this.companySize = companySize;
	}

	public CompanyStatus getStatus() {
		return status;
	}

	public void setStatus(CompanyStatus status) {
		this.status = status;
	}

	public Set<AttributeValue> getAttributes() {
		return attributes;
	}

	public void setAttributes(Set<AttributeValue> attributes) {
		this.attributes = attributes;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
	}

	public Long getVersion() {
		return version;
	}

	public void setVersion(Long version) {
		this.version = version;
	}
	
	 @PrePersist
	    protected void onCreate() {
	        this.createdAt = LocalDateTime.now();
	    }

	
}
