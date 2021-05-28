/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import { PublicationMetadata, Component, ControlImplementationDescription, Property, Link, ControlImplementation, RoleIdentifier, Remarks, ResponsibleRole } from "..";
import { BackMatter } from "../profile";


/**
 * A globally unique identifier for this component definition instance. This UUID should be changed when this document is revised.
 */
export type ComponentDefinitionUniversallyUniqueIdentifier = string;
/**
 * A globally unique identifier for a component instance. This UUID should remain unchanged when this document is revised.
 */
export type ComponentUniversallyUniqueIdentifier = string;

/**
 * A link to a resource that defines a set of components and/or capabilities to import into this collection.
 */
export type HyperlinkReference = string;


/**
 * A unique identifier for the set of implemented controls.
 */
export type ControlImplementationSetIdentifier = string;
/**
 * A reference to an OSCAL catalog or profile providing the referenced control or subcontrol definition.
 */
export type SourceResourceReference = string;
/**
 * A unique identifier for a specific control implementation.
 */
export type ControlStatementImplementationIdentifier = string;
/**
 * A summary of how the containing control statement is implemented by the component or capability.
 */
export type StatementImplementationDescription = string;
/**
 * The capability's human readable name.
 */
export type CapabilityName = string;
/**
 * A summary of the capability.
 */
export type CapabilityDescription = string;
/**
 * A description of the component, including information about its function.
 */
export type IncorporatesComponentDescription = string;


export interface OscalComponentSchema {
  component_definition: ComponentDefinition;
}
/**
 * A collection of component descriptions, which may optionally be grouped by capability.
 */
export interface ComponentDefinition {
  uuid: ComponentDefinitionUniversallyUniqueIdentifier;
  metadata: PublicationMetadata;
  import_component_definitions?: [ImportComponentDefinition, ...ImportComponentDefinition[]];
  components?: {
    [k: string]: Component
  };
  capabilities?: {
    [k: string]: Capability
  };
  back_matter?: BackMatter;
}

/**
 * Loads a component definition from another resource.
 */
export interface ImportComponentDefinition {
  href: HyperlinkReference;
}
/**
 * Defines how the component or capability supports a set of controls.
 */
export interface ControlImplementationSet {
  uuid: ControlImplementationSetIdentifier;
  source: SourceResourceReference;
  description: ControlImplementationDescription;
  props?: Property[];
  links?: Link[];
  implemented_requirements: [ControlImplementation, ...ControlImplementation[]];
}
/**
 * Identifies which statements within a control are addressed.
 */
export interface ControlStatementImplementation {
  uuid: ControlStatementImplementationIdentifier;
  description: StatementImplementationDescription;
  props?: Property[];
  links?: Link[];
  responsible_roles?: Record<RoleIdentifier, ResponsibleRole>;
  remarks?: Remarks;
}
/**
 * A grouping of other components and/or capabilities.
 */
export interface Capability {
  name: CapabilityName;
  description: CapabilityDescription;
  props?: Property[];
  links?: Link[];
  incorporates_components?: {
    [k: string]: IncorporatesComponent
  };
  control_implementations?: [ControlImplementationSet, ...ControlImplementationSet[]];
  remarks?: Remarks;
}
/**
 * TBD
 */
export interface IncorporatesComponent {
  description: IncorporatesComponentDescription;
}
