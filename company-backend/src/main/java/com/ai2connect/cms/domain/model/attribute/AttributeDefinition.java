package com.ai2connect.cms.domain.model.attribute;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "attribute_definitions")
@Getter
@Setter
@NoArgsConstructor
public class AttributeDefinition {
	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private UUID id;

	@Column(nullable = false, unique = true)
	private String name;

	@Column(nullable = false)
	@Enumerated(EnumType.STRING)
	private AttributeType type;

	private String description;

	private boolean required;

	@Column(name = "validation_rules")
	private String validationRules;

	@ElementCollection
	@CollectionTable(name = "attribute_possible_values", joinColumns = @JoinColumn(name = "attribute_id"))
	@Column(name = "value")
	private List<String> possibleValues = new ArrayList<>();

	@Column(name = "created_at", nullable = false, updatable = false)
	private LocalDateTime createdAt = LocalDateTime.now();
}
