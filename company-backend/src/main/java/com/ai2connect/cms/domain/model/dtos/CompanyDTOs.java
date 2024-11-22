package com.ai2connect.cms.domain.model.dtos;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;


import com.ai2connect.cms.domain.model.CompanySize;
import com.ai2connect.cms.domain.model.CompanyStatus;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class CompanyDTOs {

    // Base Request DTO für das Erstellen/Aktualisieren
    public static class CompanyRequestDTO {
        @NotBlank(message = "Name ist erforderlich")
        private String name;

        @NotBlank(message = "Email ist erforderlich")
        @Email(message = "Ungültiges Email-Format")
        private String email;

        private String website;
        private String phone;
        
        @NotNull(message = "Unternehmensgröße ist erforderlich")
        private CompanySize companySize;

        private Set<AttributeValueDTO> attributes = new HashSet<>();

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

		public Set<AttributeValueDTO> getAttributes() {
			return attributes;
		}

		public void setAttributes(Set<AttributeValueDTO> attributes) {
			this.attributes = attributes;
		}

    }

    // Response DTO für die Rückgabe
    public static class CompanyResponseDTO {
        private UUID id;
        private String name;
        private String email;
        private String website;
        private String phone;
        private CompanySize companySize;
        private CompanyStatus status;
        private Set<AttributeValueDTO> attributes = new HashSet<>();
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        private Long version;
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
		public Set<AttributeValueDTO> getAttributes() {
			return attributes;
		}
		public void setAttributes(Set<AttributeValueDTO> attributes) {
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

       
    }

    // DTO für AttributeValue
    public static class AttributeValueDTO {
        private String name;
        private String value;

        // Getter und Setter
        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getValue() {
            return value;
        }

        public void setValue(String value) {
            this.value = value;
        }
    }
}