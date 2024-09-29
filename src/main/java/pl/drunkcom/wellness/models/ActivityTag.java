package pl.drunkcom.wellness.models;

import lombok.Data;
import lombok.EqualsAndHashCode;
import pl.drunkcom.core.model.BaseDictionary;
import pl.drunkcom.core.model.BaseEntity;

import javax.persistence.Column;
import javax.persistence.Entity;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
public class ActivityTag extends BaseEntity {

    @Column(unique = true)
    private String name;

}
